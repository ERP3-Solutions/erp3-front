import { UseCase } from "@base/use-case";
import { IDeleteStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/detele-stock-movement.command";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";

export type DeleteStockMovementPort  = UseCase<IDeleteStockMovementCommand, IStockMovement>;