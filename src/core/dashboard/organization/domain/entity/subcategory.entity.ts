import { Entity } from '@core/shared/domain/entity/base.entity';

export interface ISubcategoryEntity extends Entity {
  organizationCategoryId: string;
  name: string;
  description: string;
}
