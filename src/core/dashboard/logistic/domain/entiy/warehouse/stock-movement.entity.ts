import { Entity } from '@core/shared/domain/entity/base.entity';
import { EStockMovementType } from '../../enum/stock-movement-type.enum';
import { StockMovementDetail } from './stock-movement-detail.entity';

export class StockMovement implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  organizationId!: string;
  warehouseId!: string;

  movementCode: StockMovementCode = new StockMovementCode();
  movementReason: StockMovementReason = new StockMovementReason();

  stockMovementDetails: StockMovementDetail[] = [];

  private constructor() {}

  static create(
    warehouseId: string,
    organizationId: string,
    movementCode: StockMovementCode,
    movementReason: StockMovementReason,
    userCreated: string,
  ): StockMovement {
    const movement = new StockMovement();

    movement.id = crypto.randomUUID();
    movement.warehouseId = warehouseId;
    movement.organizationId = organizationId;
    movement.movementCode = movementCode;
    movement.movementReason = movementReason;

    movement.logUserCreated = userCreated;
    movement.createdOnUtc = new Date();

    return movement;
  }

  updateReason(movementReason: StockMovementReason, userUpdated: string): void {
    this.movementReason = movementReason;
    this.logUserUpdated = userUpdated;
    this.updateOnUtc = new Date();
  }

  addDetail(detail: StockMovementDetail): void {
    this.stockMovementDetails.push(detail);
  }

  removeDetail(detail: StockMovementDetail): void {
    this.stockMovementDetails = this.stockMovementDetails.filter(
      (d) => d.id !== detail.id,
    );
  }

  updateDetail(
    detail: StockMovementDetail,
    newAmount: number,
    observation: string | null,
    userUpdated: string,
  ): void {
    detail.update(newAmount, observation, userUpdated);
  }

  getDetail(detailId: string): StockMovementDetail | undefined {
    return this.stockMovementDetails.find((d) => d.id === detailId);
  }

  markDeleted(userDeleted: string): void {
    this.logUserUpdated = userDeleted;
    this.updateOnUtc = new Date();
  }
}

export class StockMovementReason {
  type: EStockMovementType = EStockMovementType.INGRESO;
  description: string = '';
}

export class StockMovementCode {
  code: string = '';
}
