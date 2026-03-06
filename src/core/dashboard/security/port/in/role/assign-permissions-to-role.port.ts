import { UseCase } from "@base/use-case";
import { IAssignPermissionsToRoleCommand } from "@core/dashboard/security/domain/command/role/assign-permissions-to-role.command";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";

export type AssignPermissionsToRolePort = UseCase<IAssignPermissionsToRoleCommand, IRoleEntity>;