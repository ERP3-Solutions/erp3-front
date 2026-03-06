import { Entity } from '@core/shared/domain/entity/base.entity';
import { IProductImageEntity } from './product-image.entity';
import { IProductEntity } from './product.entity';
import { TypeAffectation } from './type-afecction.entity';
import { Unit } from './units.entity';
import { IVariantAttributeEntity } from './variant-attribute.entity';

export interface IProductVariantEntity extends Entity {
  name: string;
  price?: number;

  units: Unit;
  typeAffectation: TypeAffectation;

  productId: string;

  attributes: IVariantAttributeEntity[];
  images: IProductImageEntity[];
  logInformations: IProductEntity[];
}
