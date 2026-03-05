import { UseCase } from "@base/use-case";
import { IChangeStateListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/change-state-list-price.command";

export type ChangeStateListPricePort = UseCase<IChangeStateListPriceCommand,boolean>