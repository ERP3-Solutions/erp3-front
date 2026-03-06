import { IUpdateWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-warehouse.command";
import { IWarehouseEntity } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { UpdateWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/update-warehouse.port";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";

export class UpdateWarehouseUseCase implements UpdateWarehousePort {
    public constructor(
        private warehouseRepositoryPort: WarehouseRepositoryPort
    ){}
    async execute(params: IUpdateWarehouseCommand): Promise<IWarehouseEntity> {
        return this.warehouseRepositoryPort.updateWarehouse(params);
    }
}