import { InjectionToken } from "@angular/core";
import { ListStockMovementsPort } from "@core/dashboard/logistic/port/in/stock-movements/list-stock-movements.port";

export const LIST_STOCK_MOVEMENTS_TOKEN =
  new InjectionToken<ListStockMovementsPort>(
    'LIST_STOCK_MOVEMENTS_TOKEN'
  );
