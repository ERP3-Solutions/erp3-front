import { IAssignRoleToUserCommand } from "../../domain/command/user/assign-role-to-user.command";
import { IDeleteUserCommand } from "../../domain/command/user/delete-user.command";
import { IDisableUserCommand } from "../../domain/command/user/disable-user.command";
import { IEnableUserCommand } from "../../domain/command/user/enable-user.command";
import { IRegisterUserCommand } from "../../domain/command/user/register-user.command";
import { IUpdateUserCommand } from "../../domain/command/user/update-user.command";
import { IUserEntity } from "../../domain/entity/user/user.entity";
import { IListUserQuery } from "../../domain/query/user/list-user.query";

export interface UserRepositoryPort{
    assignRoleToUser(command: IAssignRoleToUserCommand) : Promise<IUserEntity>;
    
    deleteUser(command: IDeleteUserCommand): Promise<IUserEntity>;
    
    disableUser(command: IDisableUserCommand): Promise<IUserEntity>;
    
    enableUser(command: IEnableUserCommand) : Promise<IUserEntity>;
    
    listUser(query: IListUserQuery) : Promise<IUserEntity[]>;
    
    registerUser(command: IRegisterUserCommand) : Promise<IUserEntity>;
    
    updateUser(command: IUpdateUserCommand) : Promise<IUserEntity>;
}