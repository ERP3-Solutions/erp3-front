import { IVariantCommand } from "./variant.command";

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
    variants: IVariantCommand[];
}



