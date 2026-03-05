import { IPlanFeatureValueObject } from "../value-object/plan-feature.value-object";

export interface IPlanEntity {
  id: string,
  name: string,
  monthlyPrice: number,
  yearlyPrice: number,
  permissions: string[],
  features: IPlanFeatureValueObject[]
}