
export class StockMovementDetail {
  id!: string;

  logUserCreated!: string;
  createdOnUtc!: Date;

  logUserUpdated?: string;
  updateOnUtc?: Date;

  stockMovementId!: string;
  productId!: string;
  amount: number = 0;
  observation: string = '';

  private constructor() {}

  static create(
    productId: string,
    amount: number,
    observation: string | null,
    userCreated: string,
  ): StockMovementDetail {
    const detail = new StockMovementDetail();

    detail.id = crypto.randomUUID();
    detail.productId = productId;
    detail.amount = amount;
    detail.observation = observation ?? '';

    detail.logUserCreated = userCreated;
    detail.createdOnUtc = new Date();

    return detail;
  }

  update(
    amount: number,
    observation: string | null,
    userUpdated: string,
  ): void {
    this.amount = amount;
    this.observation = observation ?? '';

    this.logUserUpdated = userUpdated;
    this.updateOnUtc = new Date();
  }
}
