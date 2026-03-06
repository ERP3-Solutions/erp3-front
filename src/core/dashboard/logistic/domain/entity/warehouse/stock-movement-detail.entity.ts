import { Entity } from '@core/shared/domain/entity/base.entity';

export interface IStockMovementDetail extends Entity {
  stockMovementId: string;
  productId: string;
  amount: number;
  observation: string;
}
