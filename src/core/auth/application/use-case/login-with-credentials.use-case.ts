import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";

export class LoginWithCredentialsUseCase implements LoginWithCredentialsPort {
  public constructor(
    private organizationRepositoryPort: OrganizationRepositoryPort
  ) { }

  async execute(params: IRegisterOrganizationCommand) {
    return this.organizationRepositoryPort.registerOrganization(params);
  };  
}