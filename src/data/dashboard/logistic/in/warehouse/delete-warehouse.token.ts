import { InjectionToken } from "@angular/core";
import { DeleteWarehousePort } from "@core/dashboard/logistic/port/in/warehouse/delete-warehouse.port";

export const DELETE_WAREHOUSE_TOKEN =
  new InjectionToken<DeleteWarehousePort>(
    'DELETE_WAREHOUSE_TOKEN'
  );
