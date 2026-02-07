import { NgModule } from "@angular/core";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";
import { LoginWithCredentialsUseCase } from "@core/auth/application/use-case/login-with-credentials.use-case";
import { RegisterOrganizationUseCase } from "@core/auth/application/use-case/register-organization.use-case";
import { AuthProvider } from "@infrastructure/auth/auth.provider";
import { LOGIN_WITH_CREDENTIALS_PORT } from "@core/auth/port/in/login-with-credentials.port";
import { REGISTER_ORGANIZATION_PORT } from "@core/auth/port/in/register-organization.port";

@NgModule({
  imports: [
    AuthProvider
  ],
  providers: [
    {
      provide: LOGIN_WITH_CREDENTIALS_PORT,
      useFactory: (repo: OrganizationRepositoryPort) => new LoginWithCredentialsUseCase(repo),
      deps: [OrganizationRepositoryPort]
    },
    {
      provide: REGISTER_ORGANIZATION_PORT,
      useFactory: (repo: OrganizationRepositoryPort) => new RegisterOrganizationUseCase(repo),
      deps: [OrganizationRepositoryPort]
    },
  ]
})
export class AuthModule { }