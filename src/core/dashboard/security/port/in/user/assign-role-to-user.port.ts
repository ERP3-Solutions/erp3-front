import { UseCase } from "@base/use-case";
import { IAssignRoleToUserCommand } from "@core/dashboard/security/domain/command/user/assign-role-to-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";

export type AssignRoleToUserPort = UseCase<IAssignRoleToUserCommand, IUserEntity>;