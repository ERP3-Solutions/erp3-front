import { EStockMovementType } from '../../enum/stock-movement-type.enum';

export interface IStockMovementReason {
  type: EStockMovementType;
  description: string;
}
