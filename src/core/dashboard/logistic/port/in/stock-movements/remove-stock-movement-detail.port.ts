import { UseCase } from "@base/use-case";
import { IRemoveStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/remove-stock-movement-detail.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";

export type RemoveStockMovementDetailPort = UseCase<IRemoveStockMovementDetailCommand, StockMovement>;