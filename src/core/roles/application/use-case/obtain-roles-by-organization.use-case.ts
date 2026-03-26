import { ObtainRolesByOrganizationPort } from "@core/roles/port/in/obtain-roles-by-organization.port";
import { RoleRepositoryPort } from "@core/roles/port/out/role-repository.port";

export class ObtainRolesByOrganizationUseCase implements ObtainRolesByOrganizationPort {
  public constructor(
    private roleRepositoryPort: RoleRepositoryPort,
  ) { }

  async execute() {
    return this.roleRepositoryPort.obtainRolesByOrganization();
  };
}