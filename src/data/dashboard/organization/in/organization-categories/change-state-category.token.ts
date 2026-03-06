import { InjectionToken } from "@angular/core";
import { ChangeStateCategoryPort } from "@core/dashboard/organization/port/in/organization-categories/change-state-category.port";

export const CHANGE_STATE_CATEGORY_TOKEN =
  new InjectionToken<ChangeStateCategoryPort>(
    'CHANGE_STATE_CATEGORY_TOKEN'
  );
