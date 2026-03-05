export interface IListProductQuery {
    PageNumber:  number,
    PageSize :number,
    createdAtFrom:string,
    createdAtTo :string,
    search? :string,
    typeStock? :number,
}