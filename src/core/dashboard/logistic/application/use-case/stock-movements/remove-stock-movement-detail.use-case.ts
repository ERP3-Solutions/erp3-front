import { IRemoveStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/remove-stock-movement-detail.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { RemoveStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/remove-stock-movement-detail.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class RemoveStockMovementDetailUseCase implements RemoveStockMovementDetailPort {
    public constructor(
        private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}

    async execute(params: IRemoveStockMovementDetailCommand): Promise<StockMovement> {
        return this.stockMovementRepositoryPort.removeStockMovementDetail(params);
    }

}