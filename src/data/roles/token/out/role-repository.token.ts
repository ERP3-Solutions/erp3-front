import { InjectionToken } from "@angular/core";
import { PlanRepositoryPort } from "@core/plans/port/out/plan-repository.port";

export const ROLE_REPOSITORY_TOKEN =
  new InjectionToken<PlanRepositoryPort>(
    'ROLE_REPOSITORY_TOKEN'
  );