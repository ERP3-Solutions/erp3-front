import { ObtainPlansPort } from "@core/shared/port/in/obtain-plans.port";
import { PlanRepositoryPort } from "@core/shared/port/out/plan-repository.port";

export class ObtainPlansUseCase implements ObtainPlansPort {
  public constructor(
    private planRepositoryPort: PlanRepositoryPort
  ) { }

  async execute() {
    return this.planRepositoryPort.obtainPlans();
  };  
}