import { InjectionToken } from "@angular/core";
import { RoleRepositoryPort } from "@core/dashboard/security/port/out/role-repository.port";

export const ROLE_REPOSITORY_TOKEN =
  new InjectionToken<RoleRepositoryPort>(
    'ROLE_REPOSITORY_TOKEN'
  );
