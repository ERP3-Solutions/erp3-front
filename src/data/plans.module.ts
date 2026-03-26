import { NgModule } from "@angular/core";
import { OBTAIN_PLANS_TOKEN } from "./plans/token/in/obtain-plans.token";
import { PLAN_REPOSITORY_TOKEN } from "./plans/token/out/plan-repository.token";
import { PlansProvider } from "@infrastructure/plans/plans.provider";
import { ObtainPlansUseCase } from "@core/plans/application/use-case/obtain-plans.use-case";
import { PlanRepositoryPort } from "@core/plans/port/out/plan-repository.port";
import { SharedModule } from "./shared.module";

@NgModule({
  imports: [
    SharedModule,
    PlansProvider
  ],
  providers: [
    {
      provide: OBTAIN_PLANS_TOKEN,
      useFactory: (repo: PlanRepositoryPort) => new ObtainPlansUseCase(repo),
      deps: [PLAN_REPOSITORY_TOKEN]
    },
  ]
})
export class PlansModule { }