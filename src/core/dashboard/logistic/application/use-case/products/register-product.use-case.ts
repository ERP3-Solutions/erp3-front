import { IRegisterProductCommand } from "@core/dashboard/logistic/domain/command/product/register-product.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";
import { RegisterProductPort } from "@core/dashboard/logistic/port/in/product/register-product.port";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";

export class RegisterProductUseCase implements RegisterProductPort {
    public constructor(private productRepositoryPort: ProductRepositoryPort){}

    async execute(params: IRegisterProductCommand): Promise<IProductEntity> {
        return this.productRepositoryPort.registerProduct(params);
    }
}