import { UseCase } from "@base/use-case";
import { IGetStockMovementExcelQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-excel";

export type GetStockMovementExcelPort  = UseCase<IGetStockMovementExcelQuery, Blob>;