import { Entity } from '@core/shared/domain/entity/base.entity';
import { IProductImageEntity } from './product-image.entity';
import { IProductEntity } from './product.entity';
import { TypeAffectation } from './type-afecction.entity';

export interface IProductEquivalenceEntity extends Entity {
  name: string;
  price: number;

  factor: number;
  typeAffectation: TypeAffectation;

  productId: string;

  images: IProductImageEntity[];
  logInformations: IProductEntity[];
}
