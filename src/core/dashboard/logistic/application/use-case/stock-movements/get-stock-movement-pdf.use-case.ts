import { IGetStockMovementPdfQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-pdf";
import { GetStockMovementPdfPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement-pdf.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class GetStockMovementPdfUseCase implements GetStockMovementPdfPort{
    public constructor(
            private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}

    async execute(params: IGetStockMovementPdfQuery): Promise<Blob> {
        return this.stockMovementRepositoryPort.getStockMovementPdf(params);
    }
}