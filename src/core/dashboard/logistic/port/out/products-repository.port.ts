import { IRegisterProductEquivalenceCommand } from "../../domain/command/product/register-product-equivalence.command";
import { IRegisterProductVariantsCommand } from "../../domain/command/product/register-product-variants.command";
import { IRegisterProductCommand } from "../../domain/command/product/register-product.command";
import { IUpdateProductCommand } from "../../domain/command/product/update-product.command";
import { IProductEntity } from "../../domain/entity/product/product.entity";
import { IGetProductByIdQuery } from "../../domain/query/product/get-product-by-id.query";
import { IListProductQuery } from "../../domain/query/product/list-product.query";

export interface ProductRepositoryPort{
    getProductById(query: IGetProductByIdQuery): Promise<IProductEntity>;
    
    listProducts(query: IListProductQuery): Promise<IProductEntity[]>;

    registerProduct(command: IRegisterProductCommand): Promise<IProductEntity>;

    registerProductEquivalences(command: IRegisterProductEquivalenceCommand) : Promise<IProductEntity>;

    registerProductVariants(command: IRegisterProductVariantsCommand) : Promise<IProductEntity>;

    updateProduct(command: IUpdateProductCommand): Promise<IProductEntity>;
}