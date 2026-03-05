import { UseCase } from "@base/use-case";
import { IUpdateStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement-detail.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";

export type UpdateStockMovementDetailPort = UseCase<IUpdateStockMovementDetailCommand, StockMovement>;