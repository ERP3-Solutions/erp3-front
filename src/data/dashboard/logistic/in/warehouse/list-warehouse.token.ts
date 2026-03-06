import { InjectionToken } from "@angular/core";
import { ListWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/list-warehouse.port";

export const LIST_WAREHOUSE_TOKEN =
  new InjectionToken<ListWarehousePort>(
    'LIST_WAREHOUSE_TOKEN'
  );
