import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IDeleteWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/delete-warehouse.command";
import { IRegisterWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-warehouse.command";
import { IUpdateWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-warehouse.command";
import { Warehouse } from "@core/dashboard/logistic/domain/entity/warehouse/warehouse.entity";
import { IGetWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/get-warehouse.query";
import { IListWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/list-warehouse.query";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";
import { API_URL } from "@environment/api.context";

export class WarehouseRepositoryAdapter implements WarehouseRepositoryPort {

    private _httpClient: HttpClient = inject(HttpClient)

    private warehouseUrl = `${API_URL}/v1/warehouse`
  
    deleteWarehouse(command: IDeleteWarehouseCommand): Promise<Warehouse> {
        throw new Error("Method not implemented.");
    }
    getWarehouse(query: IGetWarehouseQuery): Promise<Warehouse> {
        throw new Error("Method not implemented.");
    }
    listWarehouse(query: IListWarehouseQuery): Promise<Warehouse[]> {
        throw new Error("Method not implemented.");
    }
    registerWarehouse(command: IRegisterWarehouseCommand): Promise<Warehouse> {
        throw new Error("Method not implemented.");
    }
    updateWarehouse(command: IUpdateWarehouseCommand): Promise<Warehouse> {
        throw new Error("Method not implemented.");
    }
}