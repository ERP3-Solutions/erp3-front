import { InjectionToken } from "@angular/core";
import { GetCategoriesPort } from "@core/dashboard/organization/port/in/organization-categories/get-categories.port";

export const GET_CATEGORIES_TOKEN =
  new InjectionToken<GetCategoriesPort>(
    'GET_CATEGORIES_TOKEN'
  );
