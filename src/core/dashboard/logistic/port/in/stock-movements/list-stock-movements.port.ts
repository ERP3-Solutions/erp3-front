import { UseCase } from "@base/use-case";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { IListStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/list-stock-movement.query";

export type ListStockMovementsPort = UseCase<IListStockMovementQuery, StockMovement[]>;