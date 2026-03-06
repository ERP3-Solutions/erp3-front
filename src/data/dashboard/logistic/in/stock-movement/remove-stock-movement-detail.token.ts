import { InjectionToken } from "@angular/core";
import { RemoveStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/remove-stock-movement-detail.port";

export const REMOVE_STOCK_MOVEMENT_DETAIL_TOKEN =
  new InjectionToken<RemoveStockMovementDetailPort>(
    'REMOVE_STOCK_MOVEMENT_DETAIL_TOKEN'
  );
