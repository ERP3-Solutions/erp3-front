import { NgModule } from "@angular/core";
import { SharedProvider } from "@infrastructure/shared/shared.provider";
import { OBTAIN_PLANS_TOKEN } from "./shared/token/in/obtain-plans.token";
import { PLAN_REPOSITORY_TOKEN } from "./shared/token/out/plan-repository.token";
import { PlanRepositoryPort } from "@core/shared/port/out/plan-repository.port";
import { ObtainPlansUseCase } from "@core/shared/application/use-case/obtain-plans.use-case";

@NgModule({
  imports: [
    SharedProvider
  ],
  providers: [
    {
      provide: OBTAIN_PLANS_TOKEN,
      useFactory: (repo: PlanRepositoryPort) => new ObtainPlansUseCase(repo),
      deps: [PLAN_REPOSITORY_TOKEN]
    },
  ]
})
export class SharedModule { }