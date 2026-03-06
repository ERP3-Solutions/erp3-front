import { IAssignPermissionsToRoleCommand } from "@core/dashboard/security/domain/command/role/assign-permissions-to-role.command";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";
import { AssignPermissionsToRolePort } from "@core/dashboard/security/port/in/role/assign-permissions-to-role.port";
import { RoleRepositoryPort } from "@core/dashboard/security/port/out/role-repository.port";

export class AssignPermissionsToRoleUseCase  implements AssignPermissionsToRolePort{
    public constructor(private roleRepository: RoleRepositoryPort){}

    async execute(params: IAssignPermissionsToRoleCommand): Promise<IRoleEntity> {
        return this.roleRepository.assignPermissionsToRole(params);
    }
}