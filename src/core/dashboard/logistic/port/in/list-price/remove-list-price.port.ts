import { UseCase } from "@base/use-case";
import { IRemoveListPriceCommand } from "@core/dashboard/logistic/domain/command/list-price/remove-list-price.command";

export type RemoveListPricePort = UseCase<IRemoveListPriceCommand, boolean>;