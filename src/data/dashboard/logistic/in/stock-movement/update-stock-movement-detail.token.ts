import { InjectionToken } from "@angular/core";
import { UpdateStockMovementDetailPort } from "@core/dashboard/logistic/port/in/stock-movements/update-stock-movement-detail.port";

export const UPDATE_STOCK_MOVEMENT_DETAIL_TOKEN =
  new InjectionToken<UpdateStockMovementDetailPort>(
    'UPDATE_STOCK_MOVEMENT_DETAIL_TOKEN'
  );
