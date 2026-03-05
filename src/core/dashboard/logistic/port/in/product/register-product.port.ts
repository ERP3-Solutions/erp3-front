import { UseCase } from "@base/use-case";
import { IRegisterProductCommand } from "@core/dashboard/logistic/domain/command/product/register-product.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";

export type RegisterProductPort = UseCase<IRegisterProductCommand, IProductEntity>;