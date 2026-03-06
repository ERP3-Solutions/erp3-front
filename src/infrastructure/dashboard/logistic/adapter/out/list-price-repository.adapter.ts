import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { IChangeStateListPriceCommand } from '@core/dashboard/logistic/domain/command/list-price/change-state-list-price.command';
import { IRegisterListPriceCommand } from '@core/dashboard/logistic/domain/command/list-price/register-list-price.command';
import { IRemoveListPriceCommand } from '@core/dashboard/logistic/domain/command/list-price/remove-list-price.command';
import { IUpdateListPriceCommand } from '@core/dashboard/logistic/domain/command/list-price/update-list-price.command';
import { IListPriceEntity } from '@core/dashboard/logistic/domain/entity/list-price/list-price.entity';
import { IGetListPricesQuery } from '@core/dashboard/logistic/domain/query/list-price/get-list-prices.query';
import { ListPriceRepositoryPort } from '@core/dashboard/logistic/port/out/list-price-repository.port';
import { API_URL } from '@environment/api.context';
import { IApiResponseDTO } from '@infrastructure/shared/dto/api-response.dto';
import { firstValueFrom } from 'rxjs';

export class ListPriceRepositoryAdapter implements ListPriceRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient);

  private listPriceUrl = `${API_URL}/v1/list-price`;

  async changeStateListPrice(
    command: IChangeStateListPriceCommand,
  ): Promise<boolean> {
    const response = await firstValueFrom(
      this._httpClient.patch<IApiResponseDTO<boolean>>(
        `${this.listPriceUrl}/${command.listPriceId}/state`,
        {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
  async getListPrices(query: IGetListPricesQuery): Promise<IListPriceEntity> {
    const params: Record<string, string> = { organizationId: query.organizationId };
    if (query.isActive !== undefined) params['isActive'] = String(query.isActive);
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IListPriceEntity>>(`${this.listPriceUrl}`, {
        params,
      }),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
  async registerListPrice(
    command: IRegisterListPriceCommand,
  ): Promise<IListPriceEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IListPriceEntity>>(
        `${this.listPriceUrl}`,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
  async removeListPrice(command: IRemoveListPriceCommand): Promise<boolean> {
    const response = await firstValueFrom(
      this._httpClient.delete<IApiResponseDTO<boolean>>(
        `${this.listPriceUrl}/${command.listPriceId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
  async updateListPrice(command: IUpdateListPriceCommand): Promise<IListPriceEntity> {
    const { listPriceId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.patch<IApiResponseDTO<IListPriceEntity>>(
        `${this.listPriceUrl}/${listPriceId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
}
