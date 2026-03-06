import { inject, Injectable } from "@angular/core";
import { IAddStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/add-stock-movement-detail.command";
import { IDeleteStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/detele-stock-movement.command";
import { IRegisteredStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-stock-movement.command";
import { IRemoveStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/remove-stock-movement-detail.command";
import { IUpdateStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement-detail.command";
import { IUpdateStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement.command";
import { IGetStockMovementExcelQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-excel";
import { IGetStockMovementPdfQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-pdf";
import { IGetStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement.query";
import { IListStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/list-stock-movement.query";
import { AddStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/add-stock-movement-detail.port";
import { DeleteStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/delete-stock-movement.port";
import { GetStockMovementExcelPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement-excel.port";
import { GetStockMovementPdfPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement-pdf.port";
import { GetStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement.port";
import { ListStockMovementsPort } from "@core/dashboard/logistic/port/in/stock-movements/list-stock-movements.port";
import { RegisterStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/register-stock-movement.port";
import { RemoveStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/remove-stock-movement-detail.port";
import { UpdateStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/update-stock-movement-detail.port";
import { UpdateStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/update-stock-movement.port";
import { ADD_STOCK_MOVEMENT_DETAIL_TOKEN } from "@data/dashboard/logistic/in/stock-movement/add-stock-movement-detail.token";
import { DELETE_STOCK_MOVEMENT_TOKEN } from "@data/dashboard/logistic/in/stock-movement/delete-stock-movement.token";
import { GET_STOCK_MOVEMENT_EXCEL_TOKEN } from "@data/dashboard/logistic/in/stock-movement/get-stock-movement-excel.token";
import { GET_STOCK_MOVEMENT_PDF_TOKEN } from "@data/dashboard/logistic/in/stock-movement/get-stock-movement-pdf.token";
import { GET_STOCK_MOVEMENT_TOKEN } from "@data/dashboard/logistic/in/stock-movement/get-stock-movement.token";
import { LIST_STOCK_MOVEMENTS_TOKEN } from "@data/dashboard/logistic/in/stock-movement/list-stock-movements.token";
import { REGISTER_STOCK_MOVEMENT_TOKEN } from "@data/dashboard/logistic/in/stock-movement/register-stock-movement.token";
import { REMOVE_STOCK_MOVEMENT_DETAIL_TOKEN } from "@data/dashboard/logistic/in/stock-movement/remove-stock-movement-detail.token";
import { UPDATE_STOCK_MOVEMENT_DETAIL_TOKEN } from "@data/dashboard/logistic/in/stock-movement/update-stock-movement-detail.token";
import { UPDATE_STOCK_MOVEMENT_TOKEN } from "@data/dashboard/logistic/in/stock-movement/update-stock-movement.token";

@Injectable()
export class StockMovementsFacade {
    private readonly addStockMovementDetailUseCase : AddStockMovementDetailPort = inject(ADD_STOCK_MOVEMENT_DETAIL_TOKEN);
    private readonly deleteStockMovementUseCase : DeleteStockMovementPort = inject(DELETE_STOCK_MOVEMENT_TOKEN);
    private readonly getStockMovementExcelUseCase : GetStockMovementExcelPort = inject(GET_STOCK_MOVEMENT_EXCEL_TOKEN);
    private readonly getStockMovementPdfUseCase : GetStockMovementPdfPort = inject(GET_STOCK_MOVEMENT_PDF_TOKEN);
    private readonly getStockMovementUseCase : GetStockMovementPort = inject(GET_STOCK_MOVEMENT_TOKEN);
    private readonly listStockMovementUseCase : ListStockMovementsPort = inject(LIST_STOCK_MOVEMENTS_TOKEN);
    private readonly registerStockMovementUseCase : RegisterStockMovementPort = inject(REGISTER_STOCK_MOVEMENT_TOKEN);
    private readonly removeStockMovementDetailUseCase : RemoveStockMovementDetailPort = inject(REMOVE_STOCK_MOVEMENT_DETAIL_TOKEN);
    private readonly updateStockMovementDetailUseCase : UpdateStockMovementDetailPort = inject(UPDATE_STOCK_MOVEMENT_DETAIL_TOKEN);
    private readonly updateStockMovementUseCase : UpdateStockMovementPort = inject(UPDATE_STOCK_MOVEMENT_TOKEN);

    registerStockMovement(command: IRegisteredStockMovementCommand) {
        return this.registerStockMovementUseCase.execute(command);
    }

    addStockMovementDetail(command: IAddStockMovementDetailCommand) {
        return this.addStockMovementDetailUseCase.execute(command);
    }

    deleteStockMovement(command: IDeleteStockMovementCommand) {
        return this.deleteStockMovementUseCase.execute(command);
    }

    getStockMovementExcel(query: IGetStockMovementExcelQuery) {
        return this.getStockMovementExcelUseCase.execute(query);
    }

    getStockMovementPdf(query: IGetStockMovementPdfQuery) {
        return this.getStockMovementPdfUseCase.execute(query);
    }

    getStockMovement(query: IGetStockMovementQuery) {
        return this.getStockMovementUseCase.execute(query);
    }

    listStockMovement(query: IListStockMovementQuery){
        return this.listStockMovementUseCase.execute(query);
    }

    removeStockMovementDetail(command: IRemoveStockMovementDetailCommand) {
        return this.removeStockMovementDetailUseCase.execute(command);
    }

    updateStockMovementDetail(command: IUpdateStockMovementDetailCommand) {
        return this.updateStockMovementDetailUseCase.execute(command);
    }

    updateStockMovement(command: IUpdateStockMovementCommand) {
        return this.updateStockMovementUseCase.execute(command);
    }
}