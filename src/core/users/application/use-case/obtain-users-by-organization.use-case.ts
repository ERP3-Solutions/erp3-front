import { ObtainUsersByOrganizationPort } from "@core/users/port/in/obtain-users-by-organization.port";
import { UserRepositoryPort } from "@core/users/port/out/user-repository.port";

export class ObtainUsersByOrganizationUseCase implements ObtainUsersByOrganizationPort {
  public constructor(
    private userRepositoryPort: UserRepositoryPort,
  ) { }

  async execute() {
    return this.userRepositoryPort.obtainUsersByOrganization();
  };
}