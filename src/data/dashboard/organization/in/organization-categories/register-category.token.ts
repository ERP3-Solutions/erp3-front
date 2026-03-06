import { InjectionToken } from "@angular/core";
import { RegisterCategoryPort } from "@core/dashboard/organization/port/in/organization-categories/register-category.port";

export const REGISTER_CATEGORY_TOKEN =
  new InjectionToken<RegisterCategoryPort>(
    'REGISTER_CATEGORY_TOKEN'
  );
