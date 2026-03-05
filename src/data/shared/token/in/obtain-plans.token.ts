import { InjectionToken } from "@angular/core";
import { ObtainPlansPort } from "@core/shared/port/in/obtain-plans.port";

export const OBTAIN_PLANS_TOKEN =
  new InjectionToken<ObtainPlansPort>(
    'OBTAIN_PLANS_TOKEN'
  );