import { IRoleEntity } from "@core/roles/domain/entity/role.entity";
import { ObtainRolesByOrganizationPort } from "@core/roles/port/in/obtain-roles-by-organization.port";
import { RoleRepositoryPort } from "@core/roles/port/out/role-repository.port";
import { RefreshUseCaseExecutorPort } from "@core/shared/port/in/refresh-use-case-executor.port";

export class ObtainRolesByOrganizationUseCase implements ObtainRolesByOrganizationPort {
  public constructor(
    private roleRepositoryPort: RoleRepositoryPort,
    private executor: RefreshUseCaseExecutorPort<IRoleEntity[]>
  ) { }

  async execute() {
    return this.executor.execute(() => this._execute());
  }

  private async _execute() {
    return this.roleRepositoryPort.obtainRolesByOrganization();
  };  
}