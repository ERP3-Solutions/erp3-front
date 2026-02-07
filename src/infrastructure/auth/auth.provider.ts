import { NgModule } from "@angular/core";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";
import { OrganizationRepositoryAdapter } from "./adapter/out/organization-repository.adapter";
import { SharedProvider } from "@infrastructure/shared/shared.provider";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: OrganizationRepositoryPort,
      useClass: OrganizationRepositoryAdapter
    }
  ]
})
export class AuthProvider { }