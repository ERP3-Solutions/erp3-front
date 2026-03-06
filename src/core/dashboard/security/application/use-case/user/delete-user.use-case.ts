import { IDeleteUserCommand } from "@core/dashboard/security/domain/command/user/delete-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { DeleteUserPort } from "@core/dashboard/security/port/in/user/delete-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class DeleteUserUseCase implements DeleteUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}
    
    async execute(params: IDeleteUserCommand): Promise<IUserEntity> {
        return this.userRepositoryPort.deleteUser(params);
    }

}