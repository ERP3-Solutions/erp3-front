import { InjectionToken } from "@angular/core";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";

export const ORGANIZATION_REPOSITORY_TOKEN =
  new InjectionToken<OrganizationRepositoryPort>(
    'ORGANIZATION_REPOSITORY_TOKEN'
  );