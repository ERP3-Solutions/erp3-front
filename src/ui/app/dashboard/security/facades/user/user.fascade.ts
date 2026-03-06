import { Injectable, inject } from "@angular/core";
import { IAssignRoleToUserCommand } from "@core/dashboard/security/domain/command/user/assign-role-to-user.command";
import { IDeleteUserCommand } from "@core/dashboard/security/domain/command/user/delete-user.command";
import { IDisableUserCommand } from "@core/dashboard/security/domain/command/user/disable-user.command";
import { IEnableUserCommand } from "@core/dashboard/security/domain/command/user/enable-user.command";
import { IRegisterUserCommand } from "@core/dashboard/security/domain/command/user/register-user.command";
import { IUpdateUserCommand } from "@core/dashboard/security/domain/command/user/update-user.command";
import { IListUserQuery } from "@core/dashboard/security/domain/query/user/list-user.query";
import { AssignRoleToUserPort } from "@core/dashboard/security/port/in/user/assign-role-to-user.port";
import { DeleteUserPort } from "@core/dashboard/security/port/in/user/delete-user.port";
import { DisableUserPort } from "@core/dashboard/security/port/in/user/disable-user.port";
import { EnableUserPort } from "@core/dashboard/security/port/in/user/enable-user.port";
import { ListUserPort } from "@core/dashboard/security/port/in/user/list-user.port";
import { RegisterUserPort } from "@core/dashboard/security/port/in/user/register-user.port";
import { UpdateUserPort } from "@core/dashboard/security/port/in/user/update-user.port";
import { ASSIGN_ROLE_TO_USER_TOKEN } from "@data/dashboard/security/in/role/assign-role-to-user.token";
import { DELETE_USER_TOKEN } from "@data/dashboard/security/in/user/delete-user.token";
import { DISABLE_USER_TOKEN } from "@data/dashboard/security/in/user/disable-user.token";
import { ENABLE_USER_TOKEN } from "@data/dashboard/security/in/user/enable-user.token";
import { LIST_USER_TOKEN } from "@data/dashboard/security/in/user/list-user.token";
import { REGISTER_USER_TOKEN } from "@data/dashboard/security/in/user/register-user.token";
import { UPDATE_USER_TOKEN } from "@data/dashboard/security/in/user/update-user.token";

@Injectable()
export class UserFascade{
    private readonly assignRoleToUserUseCase: AssignRoleToUserPort = inject(ASSIGN_ROLE_TO_USER_TOKEN);
    private readonly deleteUserUseCase: DeleteUserPort = inject(DELETE_USER_TOKEN);
    private readonly disableUserUseCase: DisableUserPort = inject(DISABLE_USER_TOKEN);
    private readonly enableUserUseCase: EnableUserPort = inject(ENABLE_USER_TOKEN);
    private readonly listUserUseCase: ListUserPort = inject(LIST_USER_TOKEN);
    private readonly registerUserUseCase: RegisterUserPort = inject(REGISTER_USER_TOKEN);
    private readonly updateUserUseCase: UpdateUserPort = inject(UPDATE_USER_TOKEN);

    assignRoleToUser(command: IAssignRoleToUserCommand){
        return this.assignRoleToUserUseCase.execute(command);
    }

    deleteUser(command: IDeleteUserCommand){
        return this.deleteUserUseCase.execute(command);
    }

    disableUser(command: IDisableUserCommand){
        return this.disableUserUseCase.execute(command);
    }

    enableUser(command: IEnableUserCommand){
        return this.enableUserUseCase.execute(command);
    }

    listUser(query: IListUserQuery){
        return this.listUserUseCase.execute(query);
    }

    registerUser(command: IRegisterUserCommand){
        return this.registerUserUseCase.execute(command);
    }

    updateUser(command: IUpdateUserCommand){
        return this.updateUserUseCase.execute(command);
    }
}