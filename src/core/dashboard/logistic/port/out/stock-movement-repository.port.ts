import { IAddStockMovementDetailCommand } from "../../domain/command/warehouse/add-stock-movement-detail.command";
import { IDeleteStockMovementCommand } from "../../domain/command/warehouse/detele-stock-movement.command";
import { IRegisteredStockMovementCommand } from "../../domain/command/warehouse/register-stock-movement.command";
import { IRemoveStockMovementDetailCommand } from "../../domain/command/warehouse/remove-stock-movement-detail.command";
import { IUpdateStockMovementDetailCommand } from "../../domain/command/warehouse/update-stock-movement-detail.command";
import { IUpdateStockMovementCommand } from "../../domain/command/warehouse/update-stock-movement.command";
import { IStockMovement } from "../../domain/entity/warehouse/stock-movement.entity";
import { IGetStockMovementExcelQuery } from "../../domain/query/stock-movements/get-stock-movement-excel";
import { IGetStockMovementPdfQuery } from "../../domain/query/stock-movements/get-stock-movement-pdf";
import { IGetStockMovementQuery } from "../../domain/query/stock-movements/get-stock-movement.query";
import { IListStockMovementQuery } from "../../domain/query/stock-movements/list-stock-movement.query";

export interface StockMovementRepositoryPort{
  addStockMovementDetail(command: IAddStockMovementDetailCommand): Promise<IStockMovement>;
  
  deleteStockMovement(command: IDeleteStockMovementCommand): Promise<IStockMovement>;
  
  getStockMovement(query: IGetStockMovementQuery): Promise<IStockMovement>;
  
  getStockMovementExcel(query: IGetStockMovementExcelQuery): Promise<Blob>;
  
  getStockMovementPdf(query: IGetStockMovementPdfQuery): Promise<Blob>;
  
  listStockMovement(query: IListStockMovementQuery): Promise<IStockMovement[]>;
 
  registerStockMovement(command: IRegisteredStockMovementCommand): Promise<IStockMovement>;
 
  removeStockMovementDetail(command: IRemoveStockMovementDetailCommand): Promise<IStockMovement>;
 
  updateStockMovement(command: IUpdateStockMovementCommand): Promise<IStockMovement>;
 
  updateStockMovementDetail(command: IUpdateStockMovementDetailCommand): Promise<IStockMovement>;
}
