import { InjectionToken } from "@angular/core";
import { UpdateProductPort } from "@core/dashboard/logistic/port/in/product/update-product.port";

export const UPDATE_PRODUCT_TOKEN =
  new InjectionToken<UpdateProductPort>(
    'UPDATE_PRODUCT_TOKEN'
  );
