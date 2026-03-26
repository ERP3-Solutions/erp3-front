import { NgModule } from "@angular/core";
import { OrganizationRepositoryAdapter } from "./adapter/out/organization-repository.adapter";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { AuthRepositoryAdapter } from "./adapter/out/auth-repository.adapter";
import { ORGANIZATION_REPOSITORY_TOKEN } from "@data/auth/token/out/organization-repository.token";
import { AUTH_REPOSITORY_TOKEN } from "@data/auth/token/out/auth-repository.token";

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
      provide: AUTH_REPOSITORY_TOKEN,
      useClass: AuthRepositoryAdapter
    },
  ]
})
export class AuthProvider { }