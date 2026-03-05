import { IUpdateStockMovementDetailCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement-detail.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { UpdateStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/update-stock-movement-detail.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class UpdateStockMovementDetailUseCase implements UpdateStockMovementDetailPort {

    public constructor(
            private stockMovementRepositoryPort: StockMovementRepositoryPort
        ){}
        
    async execute(params: IUpdateStockMovementDetailCommand): Promise<StockMovement> {
        return this.stockMovementRepositoryPort.updateStockMovementDetail(params);
    }
}