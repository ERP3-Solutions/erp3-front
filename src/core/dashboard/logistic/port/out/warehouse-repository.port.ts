import { IDeleteWarehouseCommand } from "../../domain/command/warehouse/delete-warehouse.command";
import { IRegisterWarehouseCommand } from "../../domain/command/warehouse/register-warehouse.command";
import { IUpdateWarehouseCommand } from "../../domain/command/warehouse/update-warehouse.command";
import { IWarehouse } from "../../domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "../../domain/query/warehouse/get-warehouse.query";
import { IListWarehouseQuery } from "../../domain/query/warehouse/list-warehouse.query";

export interface WarehouseRepositoryPort {
  deleteWarehouse(command: IDeleteWarehouseCommand): Promise<IWarehouse>;
  
  getWarehouse(query: IGetWarehouseQuery): Promise<IWarehouse>;
  
  listWarehouse(query: IListWarehouseQuery): Promise<IWarehouse[]>;
  
  registerWarehouse(command: IRegisterWarehouseCommand): Promise<IWarehouse>;
  
  updateWarehouse(command: IUpdateWarehouseCommand): Promise<IWarehouse>;
  
}