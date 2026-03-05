import { Entity } from '@core/shared/domain/entity/base.entity';
import { EStockMovementType } from '../../enum/stock-movement-type.enum';
import { StockItem } from './stock-item.entity';
import { StockMovement } from './stock-movement.entity';

export class Warehouse implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  organizationId!: string;
  name: string = '';
  direction?: string;

  stockItems: StockItem[] = [];
  stockMovements: StockMovement[] = [];

  private constructor() {}

  static create(
    organizationId: string,
    name: string,
    direction: string | null,
    userCreated: string,
  ): Warehouse {
    const warehouse = new Warehouse();

    warehouse.id = crypto.randomUUID();
    warehouse.organizationId = organizationId;
    warehouse.name = name;
    warehouse.direction = direction ?? undefined;

    warehouse.logUserCreated = userCreated;
    warehouse.createdOnUtc = new Date();

    return warehouse;
  }

  update(
    name: string | null,
    direction: string | null,
    userUpdated: string,
  ): void {
    let changed = false;

    if (name && name.length > 0 && this.name !== name) {
      this.name = name;
      changed = true;
    }

    if (direction !== null && this.direction !== direction) {
      this.direction =
        direction.trim().length > 0 ? direction.trim() : undefined;
      changed = true;
    }

    if (!changed) return;

    this.logUserUpdated = userUpdated;
    this.updateOnUtc = new Date();
  }

  delete(userDeleted: string): void {
    this.logUserUpdated = userDeleted;
    this.updateOnUtc = new Date();
  }

  getStockItem(productId: string): StockItem | undefined {
    return this.stockItems.find((s) => s.productId === productId);
  }

  applyStockChange(
    productId: string,
    amount: number,
    movementType: EStockMovementType,
    user: string,
  ): void {
    if (amount <= 0) return;

    let item = this.getStockItem(productId);

    if (!item) {
      if (
        movementType === EStockMovementType.SALIDA ||
        movementType === EStockMovementType.AJUSTE
      ) {
        throw new Error('No existe stock del producto para descontar.');
      }

      item = StockItem.create(productId, 0, user);
      this.stockItems.push(item);
    }

    if (
      movementType === EStockMovementType.INGRESO ||
      movementType === EStockMovementType.TRASLADO
    ) {
      item.increaseStock(amount, user);
    } else {
      item.decreaseStock(amount, user);
    }
  }

  rollbackStockChange(
    productId: string,
    amount: number,
    movementType: EStockMovementType,
    user: string,
  ): void {
    if (amount <= 0) return;

    const reverseType =
      movementType === EStockMovementType.INGRESO ||
      movementType === EStockMovementType.TRASLADO
        ? EStockMovementType.SALIDA
        : EStockMovementType.INGRESO;

    this.applyStockChange(productId, amount, reverseType, user);
  }
}
