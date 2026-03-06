import { NgModule } from "@angular/core";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { OrganizationRepositoryAdapter } from "./adapter/organization-repository.adapter";
import { OrganizationBranchesRepositoryAdapter } from "./adapter/organization-branches-repository.adapter";
import { OrganizationCategoriesRepositoryAdapter } from "./adapter/organization-categories-repository.adapter";
import { OrganizationSeriesRepositoryAdapter } from "./adapter/organization-series-repository.adapter";
import { ORGANIZATION_REPOSITORY_TOKEN } from "../../../data/dashboard/organization/out/organization-repository.token";
import { ORGANIZATION_BRANCHES_REPOSITORY_TOKEN } from "../../../data/dashboard/organization/out/organization-branches-repository.token";
import { ORGANIZATION_CATEGORIES_REPOSITORY_TOKEN } from "../../../data/dashboard/organization/out/organization-categories-repository.token";
import { ORGANIZATION_SERIES_REPOSITORY_TOKEN } from "../../../data/dashboard/organization/out/organization-series-repository.token";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: ORGANIZATION_REPOSITORY_TOKEN,
      useClass: OrganizationRepositoryAdapter
    },
    {
      provide: ORGANIZATION_BRANCHES_REPOSITORY_TOKEN,
      useClass: OrganizationBranchesRepositoryAdapter
    },
    {
      provide: ORGANIZATION_CATEGORIES_REPOSITORY_TOKEN,
      useClass: OrganizationCategoriesRepositoryAdapter
    },
    {
      provide: ORGANIZATION_SERIES_REPOSITORY_TOKEN,
      useClass: OrganizationSeriesRepositoryAdapter
    },
  ]
})
export class OrganizationProvider { }
