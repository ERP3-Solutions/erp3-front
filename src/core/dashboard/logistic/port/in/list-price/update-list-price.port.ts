import { UseCase } from "@base/use-case";
import { IUpdateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/update-list-price.command";
import { IListPriceEntity } from "@core/dashboard/logistic/domain/entity/list-price/list-price.entity";

export type UpdateListPricePort = UseCase<IUpdateListPriceCommand, IListPriceEntity>