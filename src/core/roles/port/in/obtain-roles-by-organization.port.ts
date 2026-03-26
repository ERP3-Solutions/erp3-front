import { UseCase } from "@base/use-case";
import { IRoleEntity } from "@core/roles/domain/entity/role.entity";

export type ObtainRolesByOrganizationPort = UseCase<void, IRoleEntity[]>