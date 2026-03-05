export class StockItem {
  id: string;
  productId: string;
  warehouseId: string;
  amount: number;

  logUserCreated?: string;
  logUserUpdated?: string;

  createdOnUtc?: Date;
  updatedOnUtc?: Date;

  private constructor(data: {
    id: string;
    productId: string;
    warehouseId: string;
    amount: number;
    userCreated: string;
  }) {
    this.id = data.id;
    this.productId = data.productId;
    this.warehouseId = data.warehouseId;
    this.amount = data.amount;

    this.logUserCreated = data.userCreated;
    this.createdOnUtc = new Date();
  }

  static create(
    productId: string,
    initialAmount: number,
    userCreated: string,
  ): StockItem {
    if (initialAmount <= 0) {
      throw new Error('Stock change amount must be greater than zero');
    }

    return new StockItem({
      id: crypto.randomUUID(),
      productId,
      warehouseId: crypto.randomUUID(),
      amount: initialAmount,
      userCreated,
    });
  }

  increaseStock(amount: number, userUpdated: string) {
    this.ensurePositive(amount);

    this.amount += amount;

    this.updateAudit(userUpdated);
  }

  decreaseStock(amount: number, userUpdated: string) {
    this.ensurePositive(amount);

    this.amount -= amount;

    this.updateAudit(userUpdated);
  }

  private ensurePositive(amount: number) {
    if (amount <= 0) {
      throw new Error('Stock change amount must be greater than zero');
    }
  }

  private updateAudit(user: string) {
    this.logUserUpdated = user;
    this.updatedOnUtc = new Date();
  }
}
