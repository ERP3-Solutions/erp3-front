import { UseCase } from "@base/use-case";
import { IPlanEntity } from "@core/shared/domain/entity/plan.entity";

export type ObtainPlansPort = UseCase<void, IPlanEntity[]>