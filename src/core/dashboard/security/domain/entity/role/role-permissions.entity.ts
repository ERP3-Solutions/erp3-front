import { ETypeRole } from "../../enum/type-role.enum";

export interface IRolePermissionsEntity{
    code: string;
    name: string;
    description: string;
    roleType: ETypeRole;
}