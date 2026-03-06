import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IDeleteWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/delete-warehouse.command";
import { IRegisterWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-warehouse.command";
import { IUpdateWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-warehouse.command";
import { IWarehouseEntity } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/get-warehouse.query";
import { IListWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/list-warehouse.query";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

interface IPagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export class WarehouseRepositoryAdapter implements WarehouseRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient);

  private warehouseUrl = `${API_URL}/v1/warehouses`;

  async getWarehouse(query: IGetWarehouseQuery): Promise<IWarehouseEntity> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IWarehouseEntity>>(
        `${this.warehouseUrl}/${query.warehouseId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async listWarehouse(query: IListWarehouseQuery): Promise<IWarehouseEntity[]> {
    const params: Record<string, string | number> = {
      organizationId: query.organizationId,
      createdFrom: query.createdAtFrom,
      createdTo: query.createdAtTo,
      pageNumber: query.pageNumber,
      pageSize: query.pageSize,
    };
    if (query.search != null) params['search'] = query.search;

    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IPagedResult<IWarehouseEntity>>>(
        this.warehouseUrl,
        { params },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data?.items ?? [];
  }

  async registerWarehouse(
    command: IRegisterWarehouseCommand,
  ): Promise<IWarehouseEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IWarehouseEntity>>(
        this.warehouseUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateWarehouse(
    command: IUpdateWarehouseCommand,
  ): Promise<IWarehouseEntity> {
    const { warehouseId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IWarehouseEntity>>(
        `${this.warehouseUrl}/${warehouseId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async deleteWarehouse(
    command: IDeleteWarehouseCommand,
  ): Promise<IWarehouseEntity> {
    const response = await firstValueFrom(
      this._httpClient.delete<IApiResponseDTO<IWarehouseEntity>>(
        `${this.warehouseUrl}/${command.warehouseId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
}
