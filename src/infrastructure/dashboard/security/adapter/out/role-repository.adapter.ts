import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IAssignPermissionsToRoleCommand } from "@core/dashboard/security/domain/command/role/assign-permissions-to-role.command";
import { IRegisterRoleCommand } from "@core/dashboard/security/domain/command/role/register-role.command";
import { IUpdateRoleCommand } from "@core/dashboard/security/domain/command/role/update-role.command";
import { IRolePermissionsEntity } from "@core/dashboard/security/domain/entity/role/role-permissions.entity";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";
import { IGetPermissionsQuery } from "@core/dashboard/security/domain/query/role/get-permissions.query";
import { RoleRepositoryPort } from "@core/dashboard/security/port/out/role-repository.port";
import { API_URL } from "@environment/api.context";

export class RoleRepositoryAdapter implements RoleRepositoryPort{
    private _httpClient: HttpClient = inject(HttpClient)

    private roleUrl = `${API_URL}/v1/roles`
    
    assignPermissionsToRole(command: IAssignPermissionsToRoleCommand): Promise<IRoleEntity> {
        throw new Error("Method not implemented.");
    }
    getPermissions(query: IGetPermissionsQuery): Promise<IRolePermissionsEntity[]> {
        throw new Error("Method not implemented.");
    }
    registerRole(command: IRegisterRoleCommand): Promise<IRoleEntity> {
        throw new Error("Method not implemented.");
    }
    updateRole(command: IUpdateRoleCommand): Promise<IRoleEntity> {
        throw new Error("Method not implemented.");
    }
}