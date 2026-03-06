import { UseCase } from "@base/use-case";
import { IRolePermissionsEntity } from "@core/dashboard/security/domain/entity/role/role-permissions.entity";
import { IGetPermissionsQuery } from "@core/dashboard/security/domain/query/role/get-permissions.query";

export type GetPermissionsPort = UseCase<IGetPermissionsQuery, IRolePermissionsEntity[]>;