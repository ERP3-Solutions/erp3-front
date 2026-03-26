import { InjectionToken } from "@angular/core";
import { PlanRepositoryPort } from "@core/plans/port/out/plan-repository.port";

export const PLAN_REPOSITORY_TOKEN =
  new InjectionToken<PlanRepositoryPort>(
    'PLAN_REPOSITORY_TOKEN'
  );