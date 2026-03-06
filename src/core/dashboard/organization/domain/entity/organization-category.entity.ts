import { Entity } from '@core/shared/domain/entity/base.entity';
import { ISubcategoryEntity } from './subcategory.entity';

export interface IOrganizationCategoryEntity extends Entity {
  organizationId: string;
  name: string;
  description: string;
  isActive: boolean;
  subcategories: ISubcategoryEntity[];
}
