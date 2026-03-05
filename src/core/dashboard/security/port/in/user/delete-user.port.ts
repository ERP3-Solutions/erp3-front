import { UseCase } from "@base/use-case";
import { IDeleteUserCommand } from "@core/dashboard/security/domain/command/user/delete-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";

export type DeleteUserPort = UseCase<IDeleteUserCommand, IUserEntity>