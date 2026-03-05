export interface IListWarehouseQuery{
    organizationId: string,
    createdAtFrom :string,
    createdAtTo :string,
    pageNumber : number,
    pageSize : number,
    search? : string,
}