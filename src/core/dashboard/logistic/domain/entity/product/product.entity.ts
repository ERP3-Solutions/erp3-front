import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeStock } from '../../enum/type-stock.enum';
import { IProductBrandEntity } from './product-brand.entity';
import { IProductEquivalenceEntity } from './product-equivalence.entity';
import { IProductImageEntity } from './product-image.entity';
import { IProductLogInformationEntiy } from './product-log-information.entity';
import { IProductVariantEntity } from './product-variant.entity';
import { TypeAffectation } from './type-afecction.entity';
import { Unit } from './units.entity';

export interface IProductEntity extends Entity {

  name: string;
  description: string;
  price: number;
  units: Unit;
  typeStock: ETypeStock;
  barCode: string;

  productBrand: IProductBrandEntity;
  typeAffectation: TypeAffectation;

  organizationId: string;
  organizationCategoryId?: string;
  subCategoryId?: string;

  variants: IProductVariantEntity[];
  equivalences: IProductEquivalenceEntity[];
  images: IProductImageEntity[];
  logInformations: IProductLogInformationEntiy[];

  hasVariants: boolean;
  hasEquivalences: boolean;
}
