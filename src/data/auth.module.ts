import { NgModule } from "@angular/core";
import { AuthProvider } from "@infrastructure/auth/auth.provider";
import { LoginWithCredentialsUseCase } from "@core/auth/application/use-case/login-with-credentials.use-case";
import { RegisterOrganizationUseCase } from "@core/auth/application/use-case/register-organization.use-case";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";
import { LOGIN_WITH_CREDENTIALS_TOKEN } from "./auth/token/in/login-with-credentials.token";
import { REGISTER_ORGANIZATION_TOKEN } from "./auth/token/in/register-organization.token";
import { ORGANIZATION_REPOSITORY_TOKEN } from "./auth/token/out/organization-repository.token";
import { USER_REPOSITORY_TOKEN } from "./auth/token/out/user-repository.token";
import { OBTAIN_ORGANIZATION_BY_RUC_TOKEN } from "./auth/token/in/obtain-organization-by-ruc.token";
import { ObtainOrganizationByRucUseCase } from "@core/auth/application/use-case/obtain-organization-by-ruc.use-case";
import { SESSION_STORAGE_REPOSITORY_TOKEN } from "./shared/token/out/session-storage-repository.token";
import { SharedModule } from "./shared.module";

@NgModule({
  imports: [
    SharedModule,
    AuthProvider,
  ],
  providers: [
    {
      provide: LOGIN_WITH_CREDENTIALS_TOKEN,
      useFactory: (
        userRepo: UserRepositoryPort,
        sessionStorageRepo: SessionStorageRepositoryPort
      ) => new LoginWithCredentialsUseCase(userRepo, sessionStorageRepo),
      deps: [
        USER_REPOSITORY_TOKEN,
        SESSION_STORAGE_REPOSITORY_TOKEN
      ]
    },
    {
      provide: REGISTER_ORGANIZATION_TOKEN,
      useFactory: (repo: OrganizationRepositoryPort) => new RegisterOrganizationUseCase(repo),
      deps: [ORGANIZATION_REPOSITORY_TOKEN]
    },
    {
      provide: OBTAIN_ORGANIZATION_BY_RUC_TOKEN,
      useFactory: (repo: OrganizationRepositoryPort) => new ObtainOrganizationByRucUseCase(repo),
      deps: [ORGANIZATION_REPOSITORY_TOKEN]
    },
  ]
})
export class AuthModule { }