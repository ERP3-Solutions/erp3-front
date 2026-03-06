import { InjectionToken } from "@angular/core";
import { UpdateCategoryPort } from "@core/dashboard/organization/port/in/organization-categories/update-category.port";

export const UPDATE_CATEGORY_TOKEN =
  new InjectionToken<UpdateCategoryPort>(
    'UPDATE_CATEGORY_TOKEN'
  );
