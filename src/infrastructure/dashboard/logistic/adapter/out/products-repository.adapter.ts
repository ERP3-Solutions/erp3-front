import { HttpClient } from "@angular/common/http";
import { isNgTemplate } from "@angular/compiler";
import { inject } from "@angular/core";
import { IRegisterProductEquivalenceCommand } from "@core/dashboard/logistic/domain/command/product/register-product-equivalence.command";
import { IRegisterProductVariantsCommand } from "@core/dashboard/logistic/domain/command/product/register-product-variants.command";
import { IRegisterProductCommand } from "@core/dashboard/logistic/domain/command/product/register-product.command";
import { IUpdateProductCommand } from "@core/dashboard/logistic/domain/command/product/update-product.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";
import { IGetProductByIdQuery } from "@core/dashboard/logistic/domain/query/product/get-product-by-id.query";
import { IListProductQuery } from "@core/dashboard/logistic/domain/query/product/list-product.query";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";
import { API_URL } from "@environment/api.context";

export class ProductsRepositoryAdapter implements ProductRepositoryPort{

    private _httpClient: HttpClient = inject(HttpClient)

    private productUrl = `${API_URL}/v1/products`

    getProductById(query: IGetProductByIdQuery): Promise<IProductEntity> {
        throw new Error("Method not implemented.");
    }
    listProducts(query: IListProductQuery): Promise<IProductEntity[]> {
        throw new Error("Method not implemented.");
    }
    registerProduct(command: IRegisterProductCommand): Promise<IProductEntity> {
        throw new Error("Method not implemented.");
    }
    registerProductEquivalences(command: IRegisterProductEquivalenceCommand): Promise<IProductEntity> {
        throw new Error("Method not implemented.");
    }
    registerProductVariants(command: IRegisterProductVariantsCommand): Promise<IProductEntity> {
        throw new Error("Method not implemented.");
    }
    updateProduct(command: IUpdateProductCommand): Promise<IProductEntity> {
        throw new Error("Method not implemented.");
    }
}