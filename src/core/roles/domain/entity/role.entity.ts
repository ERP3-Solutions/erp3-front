import { IPermissionEntity } from "@core/permissions/domain/entity/permission.entity";
import { IAuditEntity } from "@core/shared/domain/entity/audit.entity";

export interface IRoleEntity extends IAuditEntity<string> {
  name: string;
  description: string;
  organization: {
    value: string
  };
  permissions: IPermissionEntity[];
}