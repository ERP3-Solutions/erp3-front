import { InjectionToken } from "@angular/core";
import { GetStockMovementPdfPort } from "@core/dashboard/logistic/port/in/stock-movements/get-stock-movement-pdf.port";

export const GET_STOCK_MOVEMENT_PDF_TOKEN =
  new InjectionToken<GetStockMovementPdfPort>(
    'GET_STOCK_MOVEMENT_PDF_TOKEN'
  );
