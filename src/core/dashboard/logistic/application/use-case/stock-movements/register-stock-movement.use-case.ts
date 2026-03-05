import { IRegisteredStockMovementCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-stock-movement.command";
import { StockMovement } from "@core/dashboard/logistic/domain/entity/warehouse/stock-movement.entity";
import { RegisterStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/register-stock-movement.port";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export class RegisterStockMovementUseCase implements RegisterStockMovementPort {
    public constructor(
            private stockMovementRepositoryPort: StockMovementRepositoryPort
        ){}

    async execute(params: IRegisteredStockMovementCommand): Promise<StockMovement> {
        return this.stockMovementRepositoryPort.registerStockMovement(params);
    }
}