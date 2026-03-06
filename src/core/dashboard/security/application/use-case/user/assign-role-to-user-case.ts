import { IAssignRoleToUserCommand } from "@core/dashboard/security/domain/command/user/assign-role-to-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { AssignRoleToUserPort } from "@core/dashboard/security/port/in/user/assign-role-to-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class AssignRoleToUserUseCase implements AssignRoleToUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}

    async execute(params: IAssignRoleToUserCommand): Promise<IUserEntity> {
        return this.userRepositoryPort.assignRoleToUser(params);
    }
}