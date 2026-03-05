import { IAddStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/add-stock-movement-detail.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { AddStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/add-stock-movement-detail.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class AddStockMovementDetailUseCase implements AddStockMovementDetailPort{
    public constructor(
        private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}

    async execute(params: IAddStockMovementDetailCommand): Promise<StockMovement> {
        return this.stockMovementRepositoryPort.addStockMovementDetail(params);
    }
}