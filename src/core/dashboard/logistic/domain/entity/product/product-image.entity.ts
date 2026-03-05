import { Entity } from '@core/shared/domain/entity/base.entity';

export interface IProductImageEntity extends Entity {
  url: string;
  order: number;

  productId?: string;
  productVariantId?: string;
  productEquivalenceId?: string;
}
