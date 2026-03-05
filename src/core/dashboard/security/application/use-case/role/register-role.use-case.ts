import { IRegisterRoleCommand } from "@core/dashboard/security/domain/command/role/register-role.command";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";
import { RegisterRolePort } from "@core/dashboard/security/port/in/role/register-role.port";
import { RoleRepositoryPort } from "@core/dashboard/security/port/out/role-repository.port";

export class RegisterRoleUseCase  implements RegisterRolePort{
    public constructor(private roleRepository: RoleRepositoryPort){}

    async execute(params: IRegisterRoleCommand): Promise<IRoleEntity> {
        return this.roleRepository.registerRole(params);
    }
}