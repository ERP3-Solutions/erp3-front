import { UseCase } from "@base/use-case";
import { IAddStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/add-stock-movement-detail.command";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";

export type AddStockMovementDetailPort  = UseCase<IAddStockMovementDetailCommand, IStockMovement>