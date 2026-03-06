import { UseCase } from "@base/use-case";
import { IRegisterWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-warehouse.command";
import { IWarehouse } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";

export type RegisterWarehousePort  = UseCase<IRegisterWarehouseCommand, IWarehouse>