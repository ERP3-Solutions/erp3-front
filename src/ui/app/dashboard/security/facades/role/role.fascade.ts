import { inject, Injectable } from "@angular/core";
import { IAssignPermissionsToRoleCommand } from "@core/dashboard/security/domain/command/role/assign-permissions-to-role.command";
import { IRegisterRoleCommand } from "@core/dashboard/security/domain/command/role/register-role.command";
import { IUpdateRoleCommand } from "@core/dashboard/security/domain/command/role/update-role.command";
import { IGetPermissionsQuery } from "@core/dashboard/security/domain/query/role/get-permissions.query";
import { AssignPermissionsToRolePort } from "@core/dashboard/security/port/in/role/assign-permissions-to-role.port";
import { GetPermissionsPort } from "@core/dashboard/security/port/in/role/get-permissions.port";
import { RegisterRolePort } from "@core/dashboard/security/port/in/role/register-role.port";
import { UpdateRolePort } from "@core/dashboard/security/port/in/role/update-role.port";
import { ASSIGN_PERMISSIONS_TO_ROLE_TOKEN } from "@data/dashboard/security/in/role/assign-permissions-to-role.token";
import { GET_PERMISSIONS_TOKEN } from "@data/dashboard/security/in/role/get-permissions.token";
import { REGISTER_ROLE_TOKEN } from "@data/dashboard/security/in/role/register-role.token";
import { UPDATE_ROLE_TOKEN } from "@data/dashboard/security/in/role/update-role.token";

@Injectable()
export class RoleFascade {
    private readonly assignPermissionToRoleUseCase: AssignPermissionsToRolePort = inject(ASSIGN_PERMISSIONS_TO_ROLE_TOKEN);
    private readonly getPermissionUseCase: GetPermissionsPort = inject(GET_PERMISSIONS_TOKEN);
    private readonly registerRoleUseCase: RegisterRolePort = inject(REGISTER_ROLE_TOKEN);
    private readonly updateRoleUseCase: UpdateRolePort = inject(UPDATE_ROLE_TOKEN);

    assignPermissionsToRole(command: IAssignPermissionsToRoleCommand){
        return this.assignPermissionToRoleUseCase.execute(command);
    }

    getPermissionsToRole(query: IGetPermissionsQuery){
        return this.getPermissionUseCase.execute(query);
    }

    registerRole(command: IRegisterRoleCommand){
        return this.registerRoleUseCase.execute(command);
    }

    updateRole(command: IUpdateRoleCommand){
        return this.updateRoleUseCase.execute(command);
    }
}