import { IUpdateProductCommand } from "@core/dashboard/logistic/domain/command/product/update-product.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";
import { UpdateProductPort } from "@core/dashboard/logistic/port/in/product/update-product.port";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";

export class UpdateProductUseCase implements UpdateProductPort {
    public constructor(private productRepositoryPort: ProductRepositoryPort){}

    async execute(params: IUpdateProductCommand): Promise<IProductEntity> {
        return this.productRepositoryPort.updateProduct(params);
    }
}