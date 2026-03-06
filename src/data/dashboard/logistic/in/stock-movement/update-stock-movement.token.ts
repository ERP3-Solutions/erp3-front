import { InjectionToken } from "@angular/core";
import { UpdateStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/update-stock-movement.port";

export const UPDATE_STOCK_MOVEMENT_TOKEN =
  new InjectionToken<UpdateStockMovementPort>(
    'UPDATE_STOCK_MOVEMENT_TOKEN'
  );
