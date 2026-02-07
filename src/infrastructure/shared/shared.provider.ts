import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { tokenInterceptor } from "./interceptor/token.interceptor";

@NgModule({
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([
        tokenInterceptor
      ]),
    )
  ]
})
export class SharedProvider { }