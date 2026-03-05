export interface IRegisterProductVariantsCommand{
    name: string;
    description: string;
    price: number;
    units: number;
    typeStock: number;
    barCode: string;
    productBrand: string;
    typeAffectationCode: string;
    organizationCategoryId?: string;
    subCategoryId?: string;
    variants: VariantRequest[];
}

export interface VariantRequest{
    name: string;
    price: number;
    units: number;
    typeAffectationCode: string;
    attributes: VariantAttributeRequest[];
}

export interface VariantAttributeRequest{
    name: string;
    value: string;
}