import { InjectionToken } from "@angular/core";
import { IOrganizationBranchesRepositoryPort } from "@core/dashboard/organization/port/out/organization-branches-repository.port";

export const ORGANIZATION_BRANCHES_REPOSITORY_TOKEN =
  new InjectionToken<IOrganizationBranchesRepositoryPort>(
    'ORGANIZATION_BRANCHES_REPOSITORY_TOKEN'
  );
