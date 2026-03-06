import { inject, Injectable } from "@angular/core";
import { IChangeStateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/change-state-list-price.command";
import { IRegisterListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/register-list-price.command";
import { IRemoveListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/remove-list-price.command";
import { IUpdateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/update-list-price.command";
import { ChangeStateListPricePort } from "@core/dashboard/logistic/port/in/list-price/change-state-list-price.port";
import { RegisterListPricePort } from "@core/dashboard/logistic/port/in/list-price/register-list-price.port";
import { RemoveListPricePort } from "@core/dashboard/logistic/port/in/list-price/remove-list-price.port";
import { UpdateListPricePort } from "@core/dashboard/logistic/port/in/list-price/update-list-price.port";
import { CHANGE_STATE_LIST_PRICE_TOKEN } from "@data/dashboard/logistic/in/list-price/change-state-list-price.token";
import { REGISTER_LIST_PRICE_TOKEN } from "@data/dashboard/logistic/in/list-price/register-list-price.token";
import { REMOVE_LIST_PRICE_TOKEN } from "@data/dashboard/logistic/in/list-price/remove-list-price.token";
import { UPDATE_LIST_PRICE_TOKEN } from "@data/dashboard/logistic/in/list-price/update-list-price.token";

@Injectable()
export class ListPriceFacade {
    private readonly changeStateListPriceUseCase : ChangeStateListPricePort = inject(CHANGE_STATE_LIST_PRICE_TOKEN);
    private readonly registerListPriceUseCase : RegisterListPricePort = inject(REGISTER_LIST_PRICE_TOKEN);
    private readonly removeListPriceUseCase : RemoveListPricePort = inject(REMOVE_LIST_PRICE_TOKEN);
    private readonly updateListPriceUseCase : UpdateListPricePort = inject(UPDATE_LIST_PRICE_TOKEN);

    changeStateListPrice(command: IChangeStateListPriceCommand){
        return this.changeStateListPriceUseCase.execute(command);
    }

    registerListPrice(command: IRegisterListPriceCommand){
        return this.registerListPriceUseCase.execute(command);
    }

    removeListPrice(command: IRemoveListPriceCommand){
        return this.removeListPriceUseCase.execute(command);
    }

    updateListPrice(command: IUpdateListPriceCommand){
        return this.updateListPriceUseCase.execute(command);
    }
}