import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { IChangeStateSeriesCommand } from '@core/dashboard/organization/domain/command/organization-series/change-state-series.command';
import { IRegisterSeriesCommand } from '@core/dashboard/organization/domain/command/organization-series/register-series.command';
import { IOrganizationSerieEntity } from '@core/dashboard/organization/domain/entity/organization-serie.entity';
import { IListSeriesQuery } from '@core/dashboard/organization/domain/query/organization-series/list-series.query';
import { IOrganizationSeriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-series-repository.port';
import { API_URL } from '@environment/api.context';
import { IApiResponseDTO } from '@infrastructure/shared/dto/api-response.dto';
import { firstValueFrom } from 'rxjs';

export class OrganizationSeriesRepositoryAdapter
  implements IOrganizationSeriesRepositoryPort
{
  private _httpClient = inject(HttpClient);

  private readonly baseUrl = `${API_URL}/v1/organizations/series`;

  async registerSeries(
    command: IRegisterSeriesCommand,
  ): Promise<IOrganizationSerieEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IOrganizationSerieEntity>>(
        this.baseUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async changeStateSeries(
    command: IChangeStateSeriesCommand,
  ): Promise<boolean> {
    const response = await firstValueFrom(
      this._httpClient.patch<IApiResponseDTO<boolean>>(
        `${this.baseUrl}/${command.organizationSerieId}/state`,
        {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async listSeries(
    _query: IListSeriesQuery,
  ): Promise<IOrganizationSerieEntity[]> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IOrganizationSerieEntity[]>>(
        this.baseUrl,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data ?? [];
  }
}
