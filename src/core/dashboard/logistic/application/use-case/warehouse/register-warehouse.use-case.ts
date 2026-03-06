import { IRegisterWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-warehouse.command";
import { IWarehouseEntity } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { RegisterWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/register-warehouse.port";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";

export class RegisterWarehouseUseCase implements RegisterWarehousePort {
    public constructor(
                private warehouseRepositoryPort: WarehouseRepositoryPort
            ){}
    async execute(params: IRegisterWarehouseCommand): Promise<IWarehouseEntity> {
        return this.warehouseRepositoryPort.registerWarehouse(params);
    }
}