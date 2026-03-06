import { IDeleteWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/delete-warehouse.command";
import { IWarehouse } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { DeleteWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/delete-warehouse.port";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";

export class DeleteWarehouseUseCase implements DeleteWarehousePort {
    public constructor(
        private warehouseRepositoryPort: WarehouseRepositoryPort
    ){}

    async execute(params: IDeleteWarehouseCommand): Promise<IWarehouse> {
        return this.warehouseRepositoryPort.deleteWarehouse(params);
    }
}