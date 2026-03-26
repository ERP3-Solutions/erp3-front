import { InjectionToken } from "@angular/core";
import { ObtainPlansPort } from "@core/plans/port/in/obtain-plans.port";

export const OBTAIN_PLANS_TOKEN =
  new InjectionToken<ObtainPlansPort>(
    'OBTAIN_PLANS_TOKEN'
  );