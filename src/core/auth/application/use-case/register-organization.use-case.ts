import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { RegisterOrganizationPort } from "@core/auth/port/in/register-organization.port";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";

export class RegisterOrganizationUseCase implements RegisterOrganizationPort {
  public constructor(
    private organizationRepositoryPort: OrganizationRepositoryPort
  ) { }

  async execute(params: IRegisterOrganizationCommand) {
    return this.organizationRepositoryPort.registerOrganization(params);
  };  
}