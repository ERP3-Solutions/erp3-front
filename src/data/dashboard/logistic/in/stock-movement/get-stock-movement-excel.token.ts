import { InjectionToken } from "@angular/core";
import { GetStockMovementExcelPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement-excel.port";

export const GET_STOCK_MOVEMENT_EXCEL_TOKEN =
  new InjectionToken<GetStockMovementExcelPort>(
    'GET_STOCK_MOVEMENT_EXCEL_TOKEN'
  );
