import { IRemoveListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/remove-list-price.command";
import { RemoveListPricePort } from "@core/dashboard/logistic/port/in/list-price/remove-list-price.port";
import { ListPriceRepositoryPort } from "@core/dashboard/logistic/port/out/list-price-repository.port";

export class RemoveListPriceUseCase implements RemoveListPricePort {
    public constructor(private listPriceRepositoryPort: ListPriceRepositoryPort){}
    
    async execute(params: IRemoveListPriceCommand): Promise<boolean> {
        return this.listPriceRepositoryPort.removeListPrice(params);
    }
}