import { InjectionToken } from "@angular/core";
import { GetWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/get-warehouse.port";

export const GET_WAREHOUSE_TOKEN =
  new InjectionToken<GetWarehousePort>(
    'GET_WAREHOUSE_TOKEN'
  );
