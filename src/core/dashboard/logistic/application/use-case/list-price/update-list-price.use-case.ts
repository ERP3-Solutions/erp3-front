import { IUpdateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/update-list-price.command";
import { IListPriceEntity } from "@core/dashboard/logistic/domain/entity/list-price/list-price.entity";
import { UpdateListPricePort } from "@core/dashboard/logistic/port/in/list-price/update-list-price.port";
import { ListPriceRepositoryPort } from "@core/dashboard/logistic/port/out/list-price-repository.port";

export class UpdateListPriceUseCase implements UpdateListPricePort {
    public constructor(private listPriceRepositoryPort: ListPriceRepositoryPort){}

     async execute(params: IUpdateListPriceCommand): Promise<IListPriceEntity> {
        return this.listPriceRepositoryPort.updateListPrice(params);
    }
}