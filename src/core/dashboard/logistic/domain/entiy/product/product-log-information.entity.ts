import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeInformation } from '../../enum/type-information.enum';

export class ProductLogInformation implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  typeInformation!: ETypeInformation;
  productId?: string;
  productVariantId?: string;
  productEquivalenceId?: string;
}
