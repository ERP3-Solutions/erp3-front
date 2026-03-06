import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { IListUserQuery } from "@core/dashboard/security/domain/query/user/list-user.query";
import { ListUserPort } from "@core/dashboard/security/port/in/user/list-user.port";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";

export class ListUserUseCase implements ListUserPort{
    public constructor(public userRepositoryPort: UserRepositoryPort){}
             
    async execute(params: IListUserQuery): Promise<IUserEntity[]> {
        return this.userRepositoryPort.listUser(params);
    }
}