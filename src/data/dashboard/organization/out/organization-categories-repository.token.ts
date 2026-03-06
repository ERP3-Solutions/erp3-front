import { InjectionToken } from "@angular/core";
import { IOrganizationCategoriesRepositoryPort } from "@core/dashboard/organization/port/out/organization-categories-repository.port";

export const ORGANIZATION_CATEGORIES_REPOSITORY_TOKEN =
  new InjectionToken<IOrganizationCategoriesRepositoryPort>(
    'ORGANIZATION_CATEGORIES_REPOSITORY_TOKEN'
  );
