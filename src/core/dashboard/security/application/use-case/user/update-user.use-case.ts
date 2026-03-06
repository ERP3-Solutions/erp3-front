import { IUpdateUserCommand } from "@core/dashboard/security/domain/command/user/update-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { UpdateUserPort } from "@core/dashboard/security/port/in/user/update-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class UpdateUserUseCase implements UpdateUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}

    async execute(params: IUpdateUserCommand): Promise<IUserEntity> {
        return this.userRepositoryPort.updateUser(params);
    }
}