import { Entity } from '@core/shared/domain/entity/base.entity';
import { IAddress } from '../value-object/address.value-object';

export interface IOrganizationBranchEntity extends Entity {
  organizationId: string;
  name: string;
  address: IAddress;
  registerSunat: boolean;
  codeSunat: number;
  isActive: boolean;
  isDeleted: boolean;
  accessibleWarehouses: string[];
  organizationSeries: string[];
}
