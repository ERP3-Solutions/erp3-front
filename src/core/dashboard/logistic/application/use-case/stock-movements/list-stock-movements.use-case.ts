import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { IListStockMovementQuery } from "@core/dashboard/logistic/domain/query/stock-movements/list-stock-movement.query";
import { ListStockMovementsPort } from "@core/dashboard/logistic/port/in/stock-movements/list-stock-movements.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class ListStockMovementsUseCase implements ListStockMovementsPort{
    public constructor(
        private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}

    async execute(params: IListStockMovementQuery): Promise<StockMovement[]> {
        return this.stockMovementRepositoryPort.listStockMovement(params);
    }
}