import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { tokenInterceptor } from "./interceptor/token.interceptor";
import { SessionStorageRepositoryAdapter } from "./adapter/out/session-storage-repository.adapter";
import { SESSION_STORAGE_REPOSITORY_TOKEN } from "@data/shared/token/out/session-storage-repository.token";
import { SESSION_MANAGER_REPOSITORY_TOKEN } from "@data/shared/token/out/session-manager-repository.token";
import { SessionManagerRepositoryAdapter } from "./adapter/out/session-manager-repository.adapter";

@NgModule({
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([
        tokenInterceptor
      ]),
    ),
    {
      provide: SESSION_STORAGE_REPOSITORY_TOKEN,
      useClass: SessionStorageRepositoryAdapter
    },
    {
      provide: SESSION_MANAGER_REPOSITORY_TOKEN,
      useClass: SessionManagerRepositoryAdapter
    },
  ]
})
export class SharedProvider { }