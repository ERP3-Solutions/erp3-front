export interface IListStockMovementQuery{
    warehouseId: string,
    createdAtFrom :string,
    createdAtTo :string,
    pageNumber : number,
    pageSize : number,
    search? : string,
    movementType?:number,
}