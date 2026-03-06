import { IDeleteStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/detele-stock-movement.command";
import { IStockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { DeleteStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/delete-stock-movement.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class DeleteStockMovementUseCase implements DeleteStockMovementPort{
    public constructor(
            private stockMovementRepositoryPort: StockMovementRepositoryPort
        ){}
        
    async execute(params: IDeleteStockMovementCommand): Promise<IStockMovement> {
        return this.stockMovementRepositoryPort.deleteStockMovement(params);
    }
}