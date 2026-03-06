import { Entity } from '@core/shared/domain/entity/base.entity';
import { IStockMovementCode } from './stock-movement-code.entity';
import { IStockMovementDetail } from './stock-movement-detail.entity';
import { IStockMovementReason } from './stock-movement-reason.entity';

export interface IStockMovement extends Entity {
  organizationId: string;
  warehouseId: string;

  movementCode: IStockMovementCode;
  movementReason: IStockMovementReason;

  stockMovementDetails: IStockMovementDetail[];
}
