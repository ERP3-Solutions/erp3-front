import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { tokenInterceptor } from "./interceptor/token.interceptor";
import { SessionStorageRepositoryAdapter } from "./adapter/out/session-storage-repository.adapter";
import { SESSION_STORAGE_TOKEN } from "./token/out/session-storage.token";

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
    }
  ]
})
export class SharedProvider { }