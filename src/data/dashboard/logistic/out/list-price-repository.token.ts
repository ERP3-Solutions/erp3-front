import { InjectionToken } from "@angular/core";
import { ListPriceRepositoryPort } from "@core/dashboard/logistic/port/out/list-price-repository.port";

export const LIST_PRICE_REPOSITORY_TOKEN =
  new InjectionToken<ListPriceRepositoryPort>(
    'LIST_PRICE_REPOSITORY_TOKEN'
  );
