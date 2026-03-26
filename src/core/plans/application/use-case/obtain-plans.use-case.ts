import { ObtainPlansPort } from "@core/plans/port/in/obtain-plans.port";
import { PlanRepositoryPort } from "@core/plans/port/out/plan-repository.port";

export class ObtainPlansUseCase implements ObtainPlansPort {
  public constructor(
    private planRepositoryPort: PlanRepositoryPort
  ) { }

  async execute() {
    return this.planRepositoryPort.obtainPlans();
  };  
}