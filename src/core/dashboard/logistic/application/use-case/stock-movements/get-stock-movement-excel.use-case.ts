import { IGetStockMovementExcelQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement-excel";
import { GetStockMovementExcelPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement-excel.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class GetStockMovementExcelUseCase implements GetStockMovementExcelPort{
    public constructor(
        private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}
            
    async execute(params: IGetStockMovementExcelQuery): Promise<Blob> {
        return this.stockMovementRepositoryPort.getStockMovementExcel(params);
    }
}