import { Entity } from "@core/shared/domain/entity/base.entity";

export interface IStockItem extends Entity {
  productId: string;
  warehouseId: string;
  amount: number;
}
