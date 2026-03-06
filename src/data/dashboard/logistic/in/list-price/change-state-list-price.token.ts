import { InjectionToken } from "@angular/core";
import { ChangeStateListPricePort } from "@core/dashboard/logistic/port/in/list-price/change-state-list-price.port";

export const CHANGE_STATE_LIST_PRICE_TOKEN =
  new InjectionToken<ChangeStateListPricePort>(
    'CHANGE_STATE_LIST_PRICE_TOKEN'
  );
