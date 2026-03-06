import { UseCase } from "@base/use-case";
import { IDeleteWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/delete-warehouse.command";
import { IWarehouseEntity } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";

export type DeleteWarehousePort  = UseCase<IDeleteWarehouseCommand, IWarehouseEntity>;