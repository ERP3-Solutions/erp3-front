export interface IRegisterListPriceCommand {
    name: string;
    description: string;
    currencyCode: string;
    pricesListPrices: PricesListPrice[];
}

export interface PricesListPrice{
    productId: string;
    priceProduct: number;
}