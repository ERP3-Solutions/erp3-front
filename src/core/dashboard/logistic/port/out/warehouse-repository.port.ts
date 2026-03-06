import { IDeleteWarehouseCommand } from "../../domain/command/warehouse/delete-warehouse.command";
import { IRegisterWarehouseCommand } from "../../domain/command/warehouse/register-warehouse.command";
import { IUpdateWarehouseCommand } from "../../domain/command/warehouse/update-warehouse.command";
import { IWarehouseEntity } from "../../domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "../../domain/query/warehouse/get-warehouse.query";
import { IListWarehouseQuery } from "../../domain/query/warehouse/list-warehouse.query";

export interface WarehouseRepositoryPort {
  deleteWarehouse(command: IDeleteWarehouseCommand): Promise<IWarehouseEntity>;
  
  getWarehouse(query: IGetWarehouseQuery): Promise<IWarehouseEntity>;
  
  listWarehouse(query: IListWarehouseQuery): Promise<IWarehouseEntity[]>;
  
  registerWarehouse(command: IRegisterWarehouseCommand): Promise<IWarehouseEntity>;
  
  updateWarehouse(command: IUpdateWarehouseCommand): Promise<IWarehouseEntity>;
  
}