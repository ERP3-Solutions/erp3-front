import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeInformation } from '../../enum/type-information.enum';

export interface IProductLogInformationEntiy extends Entity {
  typeInformation: ETypeInformation;
  productId?: string;
  productVariantId?: string;
  productEquivalenceId?: string;
}
