import { IRegisterListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/register-list-price.command";
import { IListPriceEntity } from "@core/dashboard/logistic/domain/entity/list-price/list-price.entity";
import { RegisterListPricePort } from "@core/dashboard/logistic/port/in/list-price/register-list-price.port";
import { ListPriceRepositoryPort } from "@core/dashboard/logistic/port/out/list-price-repository.port";

export class RegisterListPriceUseCase implements RegisterListPricePort {
    public constructor(private listPriceRepositoryPort: ListPriceRepositoryPort){}

    async execute(params: IRegisterListPriceCommand): Promise<IListPriceEntity> {
        return this.listPriceRepositoryPort.registerListPrice(params);
    }
}