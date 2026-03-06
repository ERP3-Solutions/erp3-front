import { inject, Injectable } from "@angular/core";
import { IRegisterProductEquivalenceCommand } from "@core/dashboard/logistic/domain/command/product/register-product-equivalence/register-product-equivalence.command";
import { IRegisterProductVariantsCommand } from "@core/dashboard/logistic/domain/command/product/register-product-variant/register-product-variants.command";
import { IRegisterProductCommand } from "@core/dashboard/logistic/domain/command/product/register-product.command";
import { IUpdateProductCommand } from "@core/dashboard/logistic/domain/command/product/update-product.command";
import { RegisterProductEquivalencePort } from "@core/dashboard/logistic/port/in/product/register-product-equivalence.port";
import { RegisterProductVariantsPort } from "@core/dashboard/logistic/port/in/product/register-product-variants.port";
import { RegisterProductPort } from "@core/dashboard/logistic/port/in/product/register-product.port";
import { UpdateProductPort } from "@core/dashboard/logistic/port/in/product/update-product.port";
import { REGISTER_PRODUCT_EQUIVALENCE_TOKEN } from "@data/dashboard/logistic/in/product/register-product-equivalence.token";
import { REGISTER_PRODUCT_VARIANTS_TOKEN } from "@data/dashboard/logistic/in/product/register-product-variants.token";
import { REGISTER_PRODUCT_TOKEN } from "@data/dashboard/logistic/in/product/register-product.token";
import { UPDATE_PRODUCT_TOKEN } from "@data/dashboard/logistic/in/product/update-product.token";

@Injectable()
export class ProductFacade {
    private readonly registerProductEquivalenceUseCase : RegisterProductEquivalencePort = inject(REGISTER_PRODUCT_EQUIVALENCE_TOKEN);
    private readonly registerProductVariantUseCase : RegisterProductVariantsPort = inject(REGISTER_PRODUCT_VARIANTS_TOKEN);
    private readonly registerProductUseCase : RegisterProductPort = inject(REGISTER_PRODUCT_TOKEN);
    private readonly updateProductUseCase : UpdateProductPort = inject(UPDATE_PRODUCT_TOKEN);

    registerProductEquivalence(command: IRegisterProductEquivalenceCommand){
        return this.registerProductEquivalenceUseCase.execute(command);
    }

    registerProductVariant(command: IRegisterProductVariantsCommand){
        return this.registerProductVariantUseCase.execute(command);
    }

    registerProduct(command: IRegisterProductCommand){
        return this.registerProductUseCase.execute(command);
    }

    updateProduct(command: IUpdateProductCommand){
        return this.updateProductUseCase.execute(command);
    }
}