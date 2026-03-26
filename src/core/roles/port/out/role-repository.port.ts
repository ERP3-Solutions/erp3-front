import { IRoleEntity } from "@core/roles/domain/entity/role.entity";

export interface RoleRepositoryPort {
  obtainRolesByOrganization(): Promise<IRoleEntity[]>;
}