import { InjectionToken } from "@angular/core";
import { UpdateListPricePort } from "@core/dashboard/logistic/port/in/list-price/update-list-price.port";

export const UPDATE_LIST_PRICE_TOKEN =
  new InjectionToken<UpdateListPricePort>(
    'UPDATE_LIST_PRICE_TOKEN'
  );
