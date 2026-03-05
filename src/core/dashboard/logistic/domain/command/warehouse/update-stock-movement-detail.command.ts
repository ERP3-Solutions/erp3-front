export interface IUpdateStockMovementDetailCommand {
    stockMovementId: string;
    stockMovementDetailId: string;
    newAmount: number;
    observation: string;
}