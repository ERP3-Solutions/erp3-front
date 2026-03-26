import { NgModule } from "@angular/core";
import { SharedModule } from "./shared.module";
import { RefreshUseCaseExecutor } from "@core/shared/application/executor/refresh-use-case.executor";
import { RefreshSessionPort } from "@core/shared/port/in/refresh-session.port";
import { REFRESH_SESSION_TOKEN } from "./shared/token/in/refresh-session.token";
import { OBTAIN_USERS_BY_ORGANIZATION_TOKEN } from "./users/token/in/obtain-users-by-organization.token";
import { UserRepositoryPort } from "@core/users/port/out/user-repository.port";
import { ObtainUsersByOrganizationUseCase } from "@core/users/application/use-case/obtain-users-by-organization.use-case";
import { USER_REPOSITORY_TOKEN } from "./users/token/out/user-repository.token";
import { UsersProvider } from "@infrastructure/users/users.provider";

@NgModule({
  imports: [
    SharedModule,
    UsersProvider
  ],
  providers: [
    {
      provide: OBTAIN_USERS_BY_ORGANIZATION_TOKEN,
      useFactory: (
        repo: UserRepositoryPort,
        refreshUseCase: RefreshSessionPort
      ) => new RefreshUseCaseExecutor(refreshUseCase, new ObtainUsersByOrganizationUseCase(repo)),
      deps: [
        USER_REPOSITORY_TOKEN,
        REFRESH_SESSION_TOKEN
      ]
    },
  ]
})
export class UsersModule { }