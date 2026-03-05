export interface IUpdateListPriceCommand {
    listPriceId: string;
    name: string;
    description: string;
    currencyCode: string;
    pricesListPrices: UpdatePriceListPrice[];
}

export interface UpdatePriceListPrice{
    priceId :string,
    productId :string, 
    priceProduct :number
}