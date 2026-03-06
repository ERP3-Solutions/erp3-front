import { InjectionToken } from "@angular/core";
import { UpdateWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/update-warehouse.port";

export const UPDATE_WAREHOUSE_TOKEN =
  new InjectionToken<UpdateWarehousePort>(
    'UPDATE_WAREHOUSE_TOKEN'
  );
