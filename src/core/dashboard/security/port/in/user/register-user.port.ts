import { UseCase } from "@base/use-case";
import { IRegisterUserCommand } from "@core/dashboard/security/domain/command/user/register-user.command";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";

export type RegisterUserPort = UseCase<IRegisterUserCommand, IUserEntity>;