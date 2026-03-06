import { UseCase } from "@base/use-case";
import { IRegisterProductVariantsCommand } from "@core/dashboard/logistic/domain/command/product/register-product-variant/register-product-variants.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";

export type RegisterProductVariantsPort = UseCase<IRegisterProductVariantsCommand, IProductEntity>;