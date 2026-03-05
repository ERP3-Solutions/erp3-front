import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IChangeStateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/change-state-list-price.command";
import { IRegisterListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/register-list-price.command";
import { IRemoveListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/remove-list-price.command";
import { IUpdateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/update-list-price.command";
import { IListPriceEntity } from "@core/dashboard/logistic/domain/entity/list-price/list-price.entity";
import { IGetListPricesQuery } from "@core/dashboard/logistic/domain/query/list-price/get-list-prices.query";
import { ListPriceRepositoryPort } from "@core/dashboard/logistic/port/out/list-price-repository.port";
import { API_URL } from "@environment/api.context";

export class ListPriceRepositoryAdapter implements ListPriceRepositoryPort {
    private _httpClient: HttpClient = inject(HttpClient)

    private listPriceUrl = `${API_URL}/v1/list-price`
  
    changeStateListPrice(command: IChangeStateListPriceCommand): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getListPrices(query: IGetListPricesQuery): Promise<IListPriceEntity> {
        throw new Error("Method not implemented.");
    }
    registerListPrice(command: IRegisterListPriceCommand): Promise<IListPriceEntity> {
        throw new Error("Method not implemented.");
    }
    removeListPrice(command: IRemoveListPriceCommand): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateListPrice(command: IUpdateListPriceCommand): Promise<IListPriceEntity> {
        throw new Error("Method not implemented.");
    }
}