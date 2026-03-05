import { Warehouse } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { IListWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/list-warehouse.query";
import { ListWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/list-warehouse.port";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";

export class ListWarehouseUseCase implements ListWarehousePort {
    public constructor(
            private warehouseRepositoryPort: WarehouseRepositoryPort
        ){}

    async execute(params: IListWarehouseQuery): Promise<Warehouse[]> {
        return this.warehouseRepositoryPort.listWarehouse(params);
    }
}