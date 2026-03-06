import { UseCase } from "@base/use-case";
import { IUpdateWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-warehouse.command";
import { IWarehouseEntity } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";

export type UpdateWarehousePort  = UseCase<IUpdateWarehouseCommand, IWarehouseEntity>