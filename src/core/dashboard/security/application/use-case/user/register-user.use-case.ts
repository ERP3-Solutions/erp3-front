import { IRegisterUserCommand } from "@core/dashboard/security/domain/command/user/register-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { RegisterUserPort } from "@core/dashboard/security/port/in/user/register-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class RegisterUserUseCase implements RegisterUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}

    async execute(params: IRegisterUserCommand): Promise<IUserEntity> {
        return this.userRepositoryPort.registerUser(params);
    }
}