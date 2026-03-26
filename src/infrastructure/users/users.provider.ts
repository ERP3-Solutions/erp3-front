import { NgModule } from "@angular/core";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { UserRepositoryAdapter } from "./adapter/out/user-repository.adapter";
import { USER_REPOSITORY_TOKEN } from "@data/users/token/out/user-repository.token";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepositoryAdapter
    },
  ]
})
export class UsersProvider { }