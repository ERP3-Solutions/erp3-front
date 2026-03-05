import { UseCase } from "@base/use-case";
import { IUpdateRoleCommand } from "@core/dashboard/security/domain/command/role/update-role.command";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";

export type UpdateRolePort = UseCase<IUpdateRoleCommand, IRoleEntity>;