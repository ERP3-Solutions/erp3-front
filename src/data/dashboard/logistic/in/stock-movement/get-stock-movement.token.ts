import { InjectionToken } from "@angular/core";
import { GetStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement.port";

export const GET_STOCK_MOVEMENT_TOKEN =
  new InjectionToken<GetStockMovementPort>(
    'GET_STOCK_MOVEMENT_TOKEN'
  );
