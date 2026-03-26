import { NgModule } from "@angular/core";
import { RolesProvider } from "@infrastructure/roles/roles.provider";
import { OBTAIN_ROLES_BY_ORGANIZATION_TOKEN } from "./roles/token/in/obtain-roles-by-organization.token";
import { RoleRepositoryPort } from "@core/roles/port/out/role-repository.port";
import { ObtainRolesByOrganizationUseCase } from "@core/roles/application/use-case/obtain-roles-by-organization.use-case";
import { ROLE_REPOSITORY_TOKEN } from "./roles/token/out/role-repository.token";
import { SharedModule } from "./shared.module";
import { RefreshUseCaseExecutor } from "@core/shared/application/executor/refresh-use-case.executor";
import { RefreshSessionPort } from "@core/shared/port/in/refresh-session.port";
import { REFRESH_SESSION_TOKEN } from "./shared/token/in/refresh-session.token";

@NgModule({
  imports: [
    SharedModule,
    RolesProvider
  ],
  providers: [
    {
      provide: OBTAIN_ROLES_BY_ORGANIZATION_TOKEN,
      useFactory: (
        repo: RoleRepositoryPort,
        refreshUseCase: RefreshSessionPort
      ) => new RefreshUseCaseExecutor(refreshUseCase, new ObtainRolesByOrganizationUseCase(repo)),
      deps: [
        ROLE_REPOSITORY_TOKEN,
        REFRESH_SESSION_TOKEN
      ]
    },
  ]
})
export class RolesModule { }