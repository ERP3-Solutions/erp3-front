import { IVariantAttributeCommand } from "./variant-attribute.command";

export interface IVariantCommand{
    name: string;
    price: number;
    units: number;
    typeAffectationCode: string;
    attributes: IVariantAttributeCommand[];
}