import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IAddStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/add-stock-movement-detail.command";
import { IDeleteStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/detele-stock-movement.command";
import { IRegisteredStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-stock-movement.command";
import { IRemoveStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/remove-stock-movement-detail.command";
import { IUpdateStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement-detail.command";
import { IUpdateStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement.command";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { IGetStockMovementExcelQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-excel";
import { IGetStockMovementPdfQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-pdf";
import { IGetStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement.query";
import { IListStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/list-stock-movement.query";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

interface IPagedResult<T> {
  items: T[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export class StockMovementRepositoryAdapter implements StockMovementRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient);

  private stockMovementUrl = `${API_URL}/v1/stock-movements`;

  async addStockMovementDetail(
    command: IAddStockMovementDetailCommand,
  ): Promise<IStockMovement> {
    const { stockMovementId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IStockMovement>>(
        `${this.stockMovementUrl}/${stockMovementId}/details`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async deleteStockMovement(
    command: IDeleteStockMovementCommand,
  ): Promise<IStockMovement> {
    const response = await firstValueFrom(
      this._httpClient.delete<IApiResponseDTO<IStockMovement>>(
        `${this.stockMovementUrl}/${command.stockMovementId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getStockMovement(
    query: IGetStockMovementQuery,
  ): Promise<IStockMovement> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IStockMovement>>(
        `${this.stockMovementUrl}/${query.stockMovementId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getStockMovementExcel(
    query: IGetStockMovementExcelQuery,
  ): Promise<Blob> {
    const response = await firstValueFrom(
      this._httpClient.get(`${this.stockMovementUrl}/${query.stockMovementId}/excel`, {
        responseType: "blob",
      }),
    );
    return response as Blob;
  }

  async getStockMovementPdf(
    query: IGetStockMovementPdfQuery,
  ): Promise<Blob> {
    const response = await firstValueFrom(
      this._httpClient.post(
        `${this.stockMovementUrl}/${query.stockMovementId}/pdf`,
        {},
        { responseType: "blob" },
      ),
    );
    return response as Blob;
  }

  async listStockMovement(
    query: IListStockMovementQuery,
  ): Promise<IStockMovement[]> {
    const params: Record<string, string | number> = {
      warehouseId: query.warehouseId,
      createdFrom: query.createdAtFrom,
      createdTo: query.createdAtTo,
      pageNumber: query.pageNumber,
      pageSize: query.pageSize,
    };
    if (query.search != null) params["search"] = query.search;
    if (query.movementType != null) params["movementType"] = query.movementType;

    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IPagedResult<IStockMovement>>>(
        this.stockMovementUrl,
        { params },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data?.items ?? [];
  }

  async registerStockMovement(
    command: IRegisteredStockMovementCommand,
  ): Promise<IStockMovement> {
    const body = {
      warehouseId: command.warehouseId,
      organizationId: command.organizationId,
      movementType: command.stockMovementType,
      movementReasonDescription: command.movementReasonDescription,
      details: command.details,
    };
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IStockMovement>>(
        this.stockMovementUrl,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async removeStockMovementDetail(
    command: IRemoveStockMovementDetailCommand,
  ): Promise<IStockMovement> {
    const response = await firstValueFrom(
      this._httpClient.delete<IApiResponseDTO<IStockMovement>>(
        `${this.stockMovementUrl}/${command.stockMovementId}/details`,
        { params: { detailId: command.stockMovementDetailId } },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateStockMovement(
    command: IUpdateStockMovementCommand,
  ): Promise<IStockMovement> {
    const { stockMovementId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IStockMovement>>(
        `${this.stockMovementUrl}/${stockMovementId}`,
        { movementType: body.stockMovementType, movementReasonDescription: body.movementReasonDescription },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateStockMovementDetail(
    command: IUpdateStockMovementDetailCommand,
  ): Promise<IStockMovement> {
    const { stockMovementId, stockMovementDetailId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IStockMovement>>(
        `${this.stockMovementUrl}/${stockMovementId}/details/${stockMovementDetailId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
}
