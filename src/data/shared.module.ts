import { NgModule } from "@angular/core";
import { REFRESH_SESSION_TOKEN } from "./shared/token/in/refresh-session.token";
import { RefreshSessionUseCase } from "@core/shared/application/use-case/refresh-session.use-case";
import { SessionManagerRepositoryPort } from "@core/shared/port/out/session-manager-repository.port";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";
import { SESSION_MANAGER_REPOSITORY_TOKEN } from "./shared/token/out/session-manager-repository.token";
import { SESSION_STORAGE_REPOSITORY_TOKEN } from "./shared/token/out/session-storage-repository.token";

@NgModule({
  providers: [
    {
      provide: REFRESH_SESSION_TOKEN,
      useFactory: (
        sessionManagerRepo: SessionManagerRepositoryPort,
        sessionstorageRepo: SessionStorageRepositoryPort,
      ) => new RefreshSessionUseCase(sessionManagerRepo, sessionstorageRepo),
      deps: [
        SESSION_MANAGER_REPOSITORY_TOKEN,
        SESSION_STORAGE_REPOSITORY_TOKEN
      ]
    },
  ]
})
export class SharedModule { }