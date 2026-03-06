import { IWarehouseEntity } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/get-warehouse.query";
import { GetWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/get-warehouse.port";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";

export class GetWarehouseUseCase implements GetWarehousePort {
    public constructor(
        private warehouseRepositoryPort: WarehouseRepositoryPort
    ){}
    
        
    async execute(params: IGetWarehouseQuery): Promise<IWarehouseEntity> {
        return this.warehouseRepositoryPort.getWarehouse(params);
    }
}