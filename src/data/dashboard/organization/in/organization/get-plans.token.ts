import { InjectionToken } from "@angular/core";
import { GetPlansPort } from "@core/dashboard/organization/port/in/organization/get-plans.port";

export const GET_PLANS_TOKEN =
  new InjectionToken<GetPlansPort>(
    'GET_PLANS_TOKEN'
  );
