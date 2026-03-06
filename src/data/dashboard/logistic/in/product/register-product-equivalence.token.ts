import { InjectionToken } from "@angular/core";
import { RegisterProductEquivalencePort } from "@core/dashboard/logistic/port/in/product/register-product-equivalence.port";

export const REGISTER_PRODUCT_EQUIVALENCE_TOKEN =
  new InjectionToken<RegisterProductEquivalencePort>(
    'REGISTER_PRODUCT_EQUIVALENCE_TOKEN'
  );
