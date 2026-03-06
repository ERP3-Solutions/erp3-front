import { UseCase } from "@base/use-case";
import { IEnableUserCommand } from "@core/dashboard/security/domain/command/user/enable-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";

export type EnableUserPort = UseCase<IEnableUserCommand, IUserEntity>;