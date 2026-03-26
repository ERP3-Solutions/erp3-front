import { IAuditEntity } from "@core/shared/domain/entity/audit.entity";

export interface IUserEntity extends IAuditEntity<string> {
  name: string;
}