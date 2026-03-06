import { InjectionToken } from "@angular/core";
import { RegisterStockMovementPort } from "@core/dashboard/logistic/port/in/stock-movements/register-stock-movement.port";

export const REGISTER_STOCK_MOVEMENT_TOKEN =
  new InjectionToken<RegisterStockMovementPort>(
    'REGISTER_STOCK_MOVEMENT_TOKEN'
  );
