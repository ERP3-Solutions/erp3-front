import { UseCase } from "@base/use-case";
import { IUpdateStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement.command";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";

export type UpdateStockMovementPort = UseCase<IUpdateStockMovementCommand, IStockMovement>;