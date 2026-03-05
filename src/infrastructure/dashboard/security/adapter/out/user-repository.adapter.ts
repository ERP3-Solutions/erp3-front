import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IAssignRoleToUserCommand } from "@core/dashboard/security/domain/command/user/assign-role-to-user.command";
import { IDeleteUserCommand } from "@core/dashboard/security/domain/command/user/delete-user.command";
import { IDisableUserCommand } from "@core/dashboard/security/domain/command/user/disable-user.command";
import { IEnableUserCommand } from "@core/dashboard/security/domain/command/user/enable-user.command";
import { IRegisterUserCommand } from "@core/dashboard/security/domain/command/user/register-user.command";
import { IUpdateUserCommand } from "@core/dashboard/security/domain/command/user/update-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { IListUserQuery } from "@core/dashboard/security/domain/query/user/list-user.query";
import { UserRepositoryPort } from "@core/dashboard/security/port/out/user-repository.port";
import { API_URL } from "@environment/api.context";

export class UseRepositoryAdapter implements UserRepositoryPort {
    private _httpClient: HttpClient = inject(HttpClient)

    private userUrl = `${API_URL}/v1/list-price`
    
    assignRoleToUser(command: IAssignRoleToUserCommand): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    deleteUser(command: IDeleteUserCommand): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    disableUser(command: IDisableUserCommand): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    enableUser(command: IEnableUserCommand): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    listUser(query: IListUserQuery): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    registerUser(command: IRegisterUserCommand): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    updateUser(command: IUpdateUserCommand): Promise<IUserEntity> {
        throw new Error("Method not implemented.");
    }
    
}