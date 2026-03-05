import { IPlanEntity } from "@core/shared/domain/entity/plan.entity";

export interface PlanRepositoryPort {
  obtainPlans(): Promise<IPlanEntity[]>;
}