import { IChangeStateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/change-state-list-price.command";
import { ChangeStateListPricePort } from "@core/dashboard/logistic/port/in/list-price/change-state-list-price.port";
import { ListPriceRepositoryPort } from "@core/dashboard/logistic/port/out/list-price-repository.port";

export class ChangeStateListPriceUseCase implements ChangeStateListPricePort {
    public constructor(private listPriceRepositoryPort: ListPriceRepositoryPort){}

    async execute(params: IChangeStateListPriceCommand): Promise<boolean> {
        return this.listPriceRepositoryPort.changeStateListPrice(params);
    }
}