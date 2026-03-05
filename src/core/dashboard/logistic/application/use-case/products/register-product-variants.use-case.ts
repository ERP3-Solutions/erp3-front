import { IRegisterProductVariantsCommand } from "@core/dashboard/logistic/domain/command/product/register-product-variants.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";
import { RegisterProductVariantsPort } from "@core/dashboard/logistic/port/in/product/register-product-variants.port";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";

export class RegisterProductVariantsUseCase implements RegisterProductVariantsPort {
    public constructor (private productRepositoryPort: ProductRepositoryPort){}

    async execute(params: IRegisterProductVariantsCommand): Promise<IProductEntity> {
        return this.productRepositoryPort.registerProductVariants(params);
    }
}