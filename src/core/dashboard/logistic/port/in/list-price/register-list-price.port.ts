import { UseCase } from "@base/use-case";
import { IRegisterListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/register-list-price.command";
import { IListPriceEntity } from "@core/dashboard/logistic/domain/entity/list-price/list-price.entity";

export type RegisterListPricePort = UseCase<IRegisterListPriceCommand, IListPriceEntity>