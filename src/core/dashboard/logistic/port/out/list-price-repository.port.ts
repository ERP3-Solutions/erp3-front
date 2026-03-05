import { IChangeStateListPriceCommand } from "../../domain/command/list-price/change-state-list-price.command";
import { IRegisterListPriceCommand } from "../../domain/command/list-price/register-list-price.command";
import { IRemoveListPriceCommand } from "../../domain/command/list-price/remove-list-price.command";
import { IUpdateListPriceCommand } from "../../domain/command/list-price/update-list-price.command";
import { IListPriceEntity } from "../../domain/entity/list-price/list-price.entity";
import { IGetListPricesQuery } from "../../domain/query/list-price/get-list-prices.query";

export interface ListPriceRepositoryPort {
    changeStateListPrice(command: IChangeStateListPriceCommand) :Promise<boolean>;

    getListPrices(query: IGetListPricesQuery) : Promise<IListPriceEntity>;
 
    registerListPrice(command: IRegisterListPriceCommand)  :Promise<IListPriceEntity>;

    removeListPrice(command: IRemoveListPriceCommand) : Promise<boolean>;

    updateListPrice(command: IUpdateListPriceCommand) : Promise<IListPriceEntity>;
}