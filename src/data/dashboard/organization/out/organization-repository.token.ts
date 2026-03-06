import { InjectionToken } from "@angular/core";
import { IOrganizationRepositoryPort } from "@core/dashboard/organization/port/out/organization-repository.port";

export const ORGANIZATION_REPOSITORY_TOKEN =
  new InjectionToken<IOrganizationRepositoryPort>(
    'ORGANIZATION_REPOSITORY_TOKEN'
  );
