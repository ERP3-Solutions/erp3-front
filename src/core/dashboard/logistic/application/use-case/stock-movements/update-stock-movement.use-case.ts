import { IUpdateStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-stock-movement.command";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { UpdateStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/update-stock-movement.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class UpdateStockMovementUseCase implements UpdateStockMovementPort {
    public constructor(
        private stockMovementRepositoryPort: StockMovementRepositoryPort
    ){}
    
    execute(params: IUpdateStockMovementCommand): Promise<IStockMovement> {
        return this.stockMovementRepositoryPort.updateStockMovement(params);
    }
}
