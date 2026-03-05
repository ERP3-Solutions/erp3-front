import { UseCase } from "@base/use-case";
import { IUpdateUserCommand } from "@core/dashboard/security/domain/command/user/update-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";

export type UpdateUserPort = UseCase<IUpdateUserCommand, IUserEntity>;