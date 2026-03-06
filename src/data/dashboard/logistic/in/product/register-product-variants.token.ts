import { InjectionToken } from "@angular/core";
import { RegisterProductVariantsPort } from "@core/dashboard/logistic/port/in/product/register-product-variants.port";

export const REGISTER_PRODUCT_VARIANTS_TOKEN =
  new InjectionToken<RegisterProductVariantsPort>(
    'REGISTER_PRODUCT_VARIANTS_TOKEN'
  );
