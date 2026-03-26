import { NgModule } from "@angular/core";
import { RoleRepositoryAdapter } from "./adapter/out/role-repository.adapter";
import { ROLE_REPOSITORY_TOKEN } from "@data/roles/token/out/role-repository.token";
import { SharedProvider } from "@infrastructure/shared/shared.provider";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: ROLE_REPOSITORY_TOKEN,
      useClass: RoleRepositoryAdapter
    },
  ]
})
export class RolesProvider { }