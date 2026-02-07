import { NgModule } from "@angular/core";
import { OrganizationRepositoryAdapter } from "./adapter/out/organization-repository.adapter";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { UserRepositoryAdapter } from "./adapter/out/user-repository.adapter";
import { ORGANIZATION_REPOSITORY_TOKEN } from "@data/auth/token/out/organization-repository.token";
import { USER_REPOSITORY_TOKEN } from "@data/auth/token/out/user-repository.token";

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
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepositoryAdapter
    },
  ]
})
export class AuthProvider { }