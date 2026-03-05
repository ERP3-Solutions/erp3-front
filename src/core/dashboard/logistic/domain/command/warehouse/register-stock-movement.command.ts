export interface IRegisteredStockMovementCommand{
    warehouseId: string;
    organizationId: string;
    stockMovementType: string;
    movementReasonDescription: string;
    details: IStockMovementDetailItem[];
}

export interface IStockMovementDetailItem{
    productId: string;
    amount: number;
    observation: string;
}