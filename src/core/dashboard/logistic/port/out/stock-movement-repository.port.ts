import { IAddStockMovementDetailCommand } from "../../domain/command/warehouse/add-stock-movement-detail.command";
import { IDeleteStockMovementCommand } from "../../domain/command/warehouse/detele-stock-movement.command";
import { IRegisteredStockMovementCommand } from "../../domain/command/warehouse/register-stock-movement.command";
import { IRemoveStockMovementDetailCommand } from "../../domain/command/warehouse/remove-stock-movement-detail.command";
import { IUpdateStockMovementDetailCommand } from "../../domain/command/warehouse/update-stock-movement-detail.command";
import { IUpdateStockMovementCommand } from "../../domain/command/warehouse/update-stock-movement.command";
import { StockMovement } from "../../domain/entity/warehouse/stock-movement.entity";
import { IGetStockMovementExcelQuery } from "../../domain/query/stock-movements/get-stock-movement-excel";
import { IGetStockMovementPdfQuery } from "../../domain/query/stock-movements/get-stock-movement-pdf";
import { IGetStockMovementQuery } from "../../domain/query/stock-movements/get-stock-movement.query";
import { IListStockMovementQuery } from "../../domain/query/stock-movements/list-stock-movement.query";

export interface StockMovementRepositoryPort{
  addStockMovementDetail(command: IAddStockMovementDetailCommand): Promise<StockMovement>;
  
  deleteStockMovement(command: IDeleteStockMovementCommand): Promise<StockMovement>;
  
  getStockMovement(query: IGetStockMovementQuery): Promise<StockMovement>;
  
  getStockMovementExcel(query: IGetStockMovementExcelQuery): Promise<Blob>;
  
  getStockMovementPdf(query: IGetStockMovementPdfQuery): Promise<Blob>;
  
  listStockMovement(query: IListStockMovementQuery): Promise<StockMovement[]>;
 
  registerStockMovement(command: IRegisteredStockMovementCommand): Promise<StockMovement>;
 
  removeStockMovementDetail(command: IRemoveStockMovementDetailCommand): Promise<StockMovement>;
 
  updateStockMovement(command: IUpdateStockMovementCommand): Promise<StockMovement>;
 
  updateStockMovementDetail(command: IUpdateStockMovementDetailCommand): Promise<StockMovement>;
}
