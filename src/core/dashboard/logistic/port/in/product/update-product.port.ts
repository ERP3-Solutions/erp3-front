import { UseCase } from "@base/use-case";
import { IUpdateProductCommand } from "@core/dashboard/logistic/domain/command/product/update-product.command";
import { IProductEntity } from "@core/dashboard/logistic/domain/entity/product/product.entity";

export type UpdateProductPort = UseCase<IUpdateProductCommand, IProductEntity>