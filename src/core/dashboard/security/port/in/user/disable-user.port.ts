import { UseCase } from "@base/use-case";
import { IDisableUserCommand } from "@core/dashboard/security/domain/command/user/disable-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";

export type DisableUserPort = UseCase<IDisableUserCommand, IUserEntity>