import { InjectionToken } from "@angular/core";
import { RegisterListPricePort } from "@core/dashboard/logistic/port/in/list-price/register-list-price.port";

export const REGISTER_LIST_PRICE_TOKEN =
  new InjectionToken<RegisterListPricePort>(
    'REGISTER_LIST_PRICE_TOKEN'
  );
