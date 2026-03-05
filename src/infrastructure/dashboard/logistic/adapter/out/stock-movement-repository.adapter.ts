import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IAddStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/add-stock-movement-detail.command";
import { IDeleteStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/detele-stock-movement.command";
import { IRegisteredStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-stock-movement.command";
import { IRemoveStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/remove-stock-movement-detail.command";
import { IUpdateStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement-detail.command";
import { IUpdateStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { IGetStockMovementExcelQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-excel";
import { IGetStockMovementPdfQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-pdf";
import { IGetStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement.query";
import { IListStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/list-stock-movement.query";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";
import { API_URL } from "@environment/api.context";

export class StockMovementRepositoryAdapter implements StockMovementRepositoryPort {

private _httpClient: HttpClient = inject(HttpClient)

    private stockMovementUrl = `${API_URL}/v1/stock-movements`

    addStockMovementDetail(command: IAddStockMovementDetailCommand): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
    deleteStockMovement(command: IDeleteStockMovementCommand): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
    getStockMovement(query: IGetStockMovementQuery): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
    getStockMovementExcel(query: IGetStockMovementExcelQuery): Promise<Blob> {
        throw new Error("Method not implemented.");
    }
    getStockMovementPdf(query: IGetStockMovementPdfQuery): Promise<Blob> {
        throw new Error("Method not implemented.");
    }
    listStockMovement(query: IListStockMovementQuery): Promise<StockMovement[]> {
        throw new Error("Method not implemented.");
    }
    registerStockMovement(command: IRegisteredStockMovementCommand): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
    removeStockMovementDetail(command: IRemoveStockMovementDetailCommand): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
    updateStockMovement(command: IUpdateStockMovementCommand): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
    updateStockMovementDetail(command: IUpdateStockMovementDetailCommand): Promise<StockMovement> {
        throw new Error("Method not implemented.");
    }
}