import { UseCase } from "@base/use-case";
import { IGetStockMovementPdfQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-pdf";

export type GetStockMovementPdfPort = UseCase<IGetStockMovementPdfQuery, Blob>;