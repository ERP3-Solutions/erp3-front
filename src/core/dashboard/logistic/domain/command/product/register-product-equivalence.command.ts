export interface IRegisterProductEquivalenceCommand {
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
    equivalences: EquivalenceRequest[];
};

export interface EquivalenceRequest{
    name: string;
    price: number;
    factor: number;
    typeAffectationCode: string;
};