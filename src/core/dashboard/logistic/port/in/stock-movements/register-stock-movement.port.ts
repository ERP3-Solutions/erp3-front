import { UseCase } from "@base/use-case";
import { IRegisteredStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-stock-movement.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";

export type RegisterStockMovementPort = UseCase<IRegisteredStockMovementCommand, StockMovement>;