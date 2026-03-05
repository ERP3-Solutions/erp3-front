import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { IGetStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/get-stock-movement.query";
import { GetStockMovementPort } from "@core/dashboard/logistic/port/in/warehouse/get-stock-movement.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class GetStockMovementUseCase implements GetStockMovementPort{
    public constructor(
        private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}

    async execute(params: IGetStockMovementQuery): Promise<StockMovement> {
        return this.stockMovementRepositoryPort.getStockMovement(params);
    }
}