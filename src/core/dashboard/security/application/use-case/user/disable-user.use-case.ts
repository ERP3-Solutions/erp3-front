import { IDisableUserCommand } from "@core/dashboard/security/domain/command/user/disable-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { DisableUserPort } from "@core/dashboard/security/port/in/user/disable-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class DisableUserUseCase implements DisableUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}
        
    async execute(params: IDisableUserCommand): Promise<IUserEntity> {
        return this.userRepositoryPort.disableUser(params);
    }
}