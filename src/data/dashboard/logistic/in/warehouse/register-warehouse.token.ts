import { InjectionToken } from "@angular/core";
import { RegisterWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/register-warehouse.port";

export const REGISTER_WAREHOUSE_TOKEN =
  new InjectionToken<RegisterWarehousePort>(
    'REGISTER_WAREHOUSE_TOKEN'
  );
