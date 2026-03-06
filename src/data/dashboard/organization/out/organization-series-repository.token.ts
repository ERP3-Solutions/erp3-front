import { InjectionToken } from "@angular/core";
import { IOrganizationSeriesRepositoryPort } from "@core/dashboard/organization/port/out/organization-series-repository.port";

export const ORGANIZATION_SERIES_REPOSITORY_TOKEN =
  new InjectionToken<IOrganizationSeriesRepositoryPort>(
    'ORGANIZATION_SERIES_REPOSITORY_TOKEN'
  );
