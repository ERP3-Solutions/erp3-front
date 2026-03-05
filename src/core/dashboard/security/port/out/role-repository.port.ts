import { IAssignPermissionsToRoleCommand } from "../../domain/command/role/assign-permissions-to-role.command";
import { IRegisterRoleCommand } from "../../domain/command/role/register-role.command";
import { IUpdateRoleCommand } from "../../domain/command/role/update-role.command";
import { IRolePermissionsEntity } from "../../domain/entity/role/role-permissions.entity";
import { IRoleEntity } from "../../domain/entity/role/role.entity";
import { IGetPermissionsQuery } from "../../domain/query/role/get-permissions.query";

export interface RoleRepositoryPort{
    assignPermissionsToRole(command: IAssignPermissionsToRoleCommand) : Promise<IRoleEntity>;
    
    getPermissions(query: IGetPermissionsQuery) : Promise<IRolePermissionsEntity[]>;
    
    registerRole(command: IRegisterRoleCommand) : Promise<IRoleEntity>;
    
    updateRole(command: IUpdateRoleCommand) : Promise<IRoleEntity>;
}