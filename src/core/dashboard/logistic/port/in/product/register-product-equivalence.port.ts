import { UseCase } from "@base/use-case";
import { IRegisterProductEquivalenceCommand } from "@core/dashboard/logistic/domain/command/product/register-product-equivalence/register-product-equivalence.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";

export type RegisterProductEquivalencePort = UseCase<IRegisterProductEquivalenceCommand, IProductEntity>;