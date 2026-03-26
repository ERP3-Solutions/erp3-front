import { IPlanEntity } from "@core/plans/domain/entity/plan.entity";

export interface PlanRepositoryPort {
  obtainPlans(): Promise<IPlanEntity[]>;
}