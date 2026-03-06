import { IEnableUserCommand } from "@core/dashboard/security/domain/command/user/enable-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { EnableUserPort } from "@core/dashboard/security/port/in/user/enable-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class EnableUserUseCase implements EnableUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}
         
    async execute(params: IEnableUserCommand): Promise<IUserEntity> {
        return this.userRepositoryPort.enableUser(params);
    }
}