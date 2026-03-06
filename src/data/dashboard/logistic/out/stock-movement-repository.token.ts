import { InjectionToken } from "@angular/core";
import { StockMovementRepositoryPort } from "@core/dashboard/logistic/port/out/stock-movement-repository.port";

export const STOCK_MOVEMENT_REPOSITORY_TOKEN =
  new InjectionToken<StockMovementRepositoryPort>(
    'STOCK_MOVEMENT_REPOSITORY_TOKEN'
  );
