import { InjectionToken } from "@angular/core";
import { DeleteStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/delete-stock-movement.port";

export const DELETE_STOCK_MOVEMENT_TOKEN =
  new InjectionToken<DeleteStockMovementPort>(
    'DELETE_STOCK_MOVEMENT_TOKEN'
  );
