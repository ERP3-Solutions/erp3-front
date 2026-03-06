import { InjectionToken } from "@angular/core";
import { ProductRepositoryPort } from "@core/dashboard/logistic/port/out/products-repository.port";

export const PRODUCT_REPOSITORY_TOKEN =
  new InjectionToken<ProductRepositoryPort>(
    'PRODUCT_REPOSITORY_TOKEN'
  );
