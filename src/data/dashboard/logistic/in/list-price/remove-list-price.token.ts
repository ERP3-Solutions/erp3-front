import { InjectionToken } from "@angular/core";
import { RemoveListPricePort } from "@core/dashboard/logistic/port/in/list-price/remove-list-price.port";

export const REMOVE_LIST_PRICE_TOKEN =
  new InjectionToken<RemoveListPricePort>(
    'REMOVE_LIST_PRICE_TOKEN'
  );
