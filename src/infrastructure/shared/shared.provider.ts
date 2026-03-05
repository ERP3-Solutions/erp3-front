import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { tokenInterceptor } from "./interceptor/token.interceptor";
import { SessionStorageRepositoryAdapter } from "./adapter/out/session-storage-repository.adapter";
import { SESSION_STORAGE_TOKEN } from "./token/out/session-storage.token";
import { PLAN_REPOSITORY_TOKEN } from "@data/shared/token/out/plan-repository.token";
import { PlanRepositoryAdapter } from "./adapter/out/plan-repository.adapter";

@NgModule({
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([
        tokenInterceptor
      ]),
    ),
    {
      provide: SESSION_STORAGE_TOKEN,
      useClass: SessionStorageRepositoryAdapter
    },
    {
      provide: PLAN_REPOSITORY_TOKEN,
      useClass: PlanRepositoryAdapter
    },
  ]
})
export class SharedProvider { }