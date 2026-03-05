import { IRegisterProductEquivalenceCommand } from "@core/dashboard/logistic/domain/command/product/register-product-equivalence.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";
import { RegisterProductEquivalencePort } from "@core/dashboard/logistic/port/in/product/register-product-equivalence.port";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";

export class RegsiterProductEquivalenceUseCase implements RegisterProductEquivalencePort {
    public constructor (private productRepositoryPort: ProductRepositoryPort){}

    async execute(params: IRegisterProductEquivalenceCommand): Promise<IProductEntity> {
        return this.productRepositoryPort.registerProductEquivalences(params);
    }
}