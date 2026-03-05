import { IDeleteWarehouseCommand } from "../../domain/command/warehouse/delete-warehouse.command";
import { IRegisterWarehouseCommand } from "../../domain/command/warehouse/register-warehouse.command";
import { IUpdateWarehouseCommand } from "../../domain/command/warehouse/update-warehouse.command";
import { Warehouse } from "../../domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "../../domain/query/warehouse/get-warehouse.query";
import { IListWarehouseQuery } from "../../domain/query/warehouse/list-warehouse.query";

export interface WarehouseRepositoryPort {
  deleteWarehouse(command: IDeleteWarehouseCommand): Promise<Warehouse>;
  
  getWarehouse(query: IGetWarehouseQuery): Promise<Warehouse>;
  
  listWarehouse(query: IListWarehouseQuery): Promise<Warehouse[]>;
  
  registerWarehouse(command: IRegisterWarehouseCommand): Promise<Warehouse>;
  
  updateWarehouse(command: IUpdateWarehouseCommand): Promise<Warehouse>;
  
}