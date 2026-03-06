import { Entity } from '@core/shared/domain/entity/base.entity';

export interface IOrganizationPlanEntity extends Entity {
  organizationId: string;
  planId: string;
  expiredTime: number;
}
