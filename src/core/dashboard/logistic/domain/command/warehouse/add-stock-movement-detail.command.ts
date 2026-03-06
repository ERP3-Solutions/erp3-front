export interface IAddStockMovementDetailCommand{
    stockMovementId: string;
    productId: string;
    amount: number;
    observation: string;
}