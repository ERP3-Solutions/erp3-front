import { InjectionToken } from "@angular/core";
import { PlanRepositoryPort } from "@core/shared/port/out/plan-repository.port";

export const PLAN_REPOSITORY_TOKEN =
  new InjectionToken<PlanRepositoryPort>(
    'PLAN_REPOSITORY_TOKEN'
  );