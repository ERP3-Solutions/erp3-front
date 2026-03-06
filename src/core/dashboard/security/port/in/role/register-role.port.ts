import { UseCase } from "@base/use-case";
import { IRegisterRoleCommand } from "@core/dashboard/security/domain/command/role/register-role.command";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";

export type RegisterRolePort = UseCase<IRegisterRoleCommand, IRoleEntity>;