import { UseCase } from "@base/use-case";
import { IPlanEntity } from "@core/plans/domain/entity/plan.entity";

export type ObtainPlansPort = UseCase<void, IPlanEntity[]>