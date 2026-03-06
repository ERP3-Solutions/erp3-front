import { Entity } from '@core/shared/domain/entity/base.entity';
import { IStockItem } from './stock-item.entity';
import { IStockMovement } from './stock-movement.entity';

export interface IWarehouseEntity extends Entity {
  organizationId: string;
  name: string;
  direction?: string;

  stockItems: IStockItem[];
  stockMovements: IStockMovement[];
}
