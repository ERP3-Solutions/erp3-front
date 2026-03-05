import { Entity } from "@core/shared/domain/entity/base.entity";
import { IRolePermissionsEntity } from "./role-permissions.entity";

export interface IRoleEntity extends Entity{
    Name: string;
    Description: string;
    OrganizationId: string;
    Permissions: IRolePermissionsEntity[];
}