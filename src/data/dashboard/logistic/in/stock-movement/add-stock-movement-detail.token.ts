import { InjectionToken } from "@angular/core";
import { AddStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/add-stock-movement-detail.port";

export const ADD_STOCK_MOVEMENT_DETAIL_TOKEN =
  new InjectionToken<AddStockMovementDetailPort>(
    'ADD_STOCK_MOVEMENT_DETAIL_TOKEN'
  );
