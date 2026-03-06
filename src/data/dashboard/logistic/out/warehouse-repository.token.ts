import { InjectionToken } from "@angular/core";
import { WarehouseRepositoryPort } from "@core/dashboard/logistic/port/out/warehouse-repository.port";

export const WAREHOUSE_REPOSITORY_TOKEN =
  new InjectionToken<WarehouseRepositoryPort>(
    'WAREHOUSE_REPOSITORY_TOKEN'
  );
