import { NgModule } from "@angular/core";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { UseRepositoryAdapter } from "./adapter/out/user-repository.adapter";
import { RoleRepositoryAdapter } from "./adapter/out/role-repository.adapter";
import { USER_REPOSITORY_TOKEN } from "../../../data/dashboard/security/out/user-repository.token";
import { ROLE_REPOSITORY_TOKEN } from "../../../data/dashboard/security/out/role-repository.token";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UseRepositoryAdapter
    },
    {
      provide: ROLE_REPOSITORY_TOKEN,
      useClass: RoleRepositoryAdapter
    },
  ]
})
export class SecurityProvider { }
