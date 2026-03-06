import { UseCase } from "@base/use-case";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { IGetStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement.query";

export type GetStockMovementPort = UseCase<IGetStockMovementQuery, IStockMovement>;