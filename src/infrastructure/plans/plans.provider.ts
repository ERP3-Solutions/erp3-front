import { NgModule } from "@angular/core";
import { PlanRepositoryAdapter } from "./adapter/out/plan-repository.adapter";
import { PLAN_REPOSITORY_TOKEN } from "@data/plans/token/out/plan-repository.token";
import { SharedProvider } from "@infrastructure/shared/shared.provider";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: PLAN_REPOSITORY_TOKEN,
      useClass: PlanRepositoryAdapter
    },
  ]
})
export class PlansProvider { }