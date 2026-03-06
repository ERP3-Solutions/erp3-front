export interface IUpdateProductCommand {
    productId: string;
    name?: string;
    description?: string;
    price?: number;
    units?: number;
    typeStock?: number;
    barCode?: string;
    productBrand?: string;
    typeAffectationCode?: string;
    organizationCategoryId?: string;
    subCategoryId?: string;
}