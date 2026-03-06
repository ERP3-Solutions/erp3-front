import { inject, Injectable } from "@angular/core";
import { IDeleteWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/delete-warehouse.command";
import { IRegisterWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/register-warehouse.command";
import { IUpdateWarehouseCommand } from "@core/dashboard/logistic/domain/command/warehouse/update-warehouse.command";
import { IGetWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/get-warehouse.query";
import { IListWarehouseQuery } from "@core/dashboard/logistic/domain/query/warehouse/list-warehouse.query";
import { DeleteWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/delete-warehouse.port";
import { GetWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/get-warehouse.port";
import { ListWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/list-warehouse.port";
import { RegisterWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/register-warehouse.port";
import { UpdateWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/update-warehouse.port";
import { DELETE_WAREHOUSE_TOKEN } from "@data/dashboard/logistic/in/warehouse/delete-warehouse.token";
import { GET_WAREHOUSE_TOKEN } from "@data/dashboard/logistic/in/warehouse/get-warehouse.token";
import { LIST_WAREHOUSE_TOKEN } from "@data/dashboard/logistic/in/warehouse/list-warehouse.token";
import { REGISTER_WAREHOUSE_TOKEN } from "@data/dashboard/logistic/in/warehouse/register-warehouse.token";
import { UPDATE_WAREHOUSE_TOKEN } from "@data/dashboard/logistic/in/warehouse/update-warehouse.token";

@Injectable()
export class WarehouseFacade {
    private readonly registerWarehouseUseCase :RegisterWarehousePort = inject(REGISTER_WAREHOUSE_TOKEN);
    private readonly deleteWarehouseUseCase :DeleteWarehousePort = inject(DELETE_WAREHOUSE_TOKEN);
    private readonly getWarehouseUseCase :GetWarehousePort = inject(GET_WAREHOUSE_TOKEN);
    private readonly listWarehouseUseCase :ListWarehousePort = inject(LIST_WAREHOUSE_TOKEN);
    private readonly updateWarehouseUseCase :UpdateWarehousePort = inject(UPDATE_WAREHOUSE_TOKEN);

    registerWarehouse(command: IRegisterWarehouseCommand) {
        return this.registerWarehouseUseCase.execute(command);
    }

    deleteWarehouse(command: IDeleteWarehouseCommand){
        return this.deleteWarehouseUseCase.execute(command);
    }

    getWarehouse(query: IGetWarehouseQuery){
        return this.getWarehouseUseCase.execute(query);
    }

    listWarehouse(query: IListWarehouseQuery){
        return this.listWarehouseUseCase.execute(query);
    }

    updateWarehouse(command: IUpdateWarehouseCommand) {
        return this.updateWarehouseUseCase.execute(command);
    }
}