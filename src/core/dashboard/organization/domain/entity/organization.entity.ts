import { Entity } from '@core/shared/domain/entity/base.entity';
import { ELegalEntityType } from '../enum/legal-entity-type.enum';
import { IAddress } from '../value-object/address.value-object';
import { IRuc } from '../value-object/ruc.value-object';
import { IUserSol } from '../value-object/user-sol.value-object';
import { IOrganizationBranchEntity } from './organization-branch.entity';
import { IOrganizationCategoryEntity } from './organization-category.entity';
import { IOrganizationPlanEntity } from './organization-plan.entity';
import { IOrganizationSerieEntity } from './organization-serie.entity';

export interface IOrganizationEntity extends Entity {
  tradeName: string;
  companyName: string;
  email: string;
  phone: string;
  ruc: IRuc;
  userSol: IUserSol;
  address: IAddress;
  legalEntityType: ELegalEntityType;
  isActive: boolean;
  organizationBranches: IOrganizationBranchEntity[];
  organizationPlans: IOrganizationPlanEntity[];
  organizationSeries: IOrganizationSerieEntity[];
  organizationCategories: IOrganizationCategoryEntity[];
}
