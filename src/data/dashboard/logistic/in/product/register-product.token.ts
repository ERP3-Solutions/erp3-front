import { InjectionToken } from "@angular/core";
import { RegisterProductPort } from "@core/dashboard/logistic/port/in/product/register-product.port";

export const REGISTER_PRODUCT_TOKEN =
  new InjectionToken<RegisterProductPort>(
    'REGISTER_PRODUCT_TOKEN'
  );
