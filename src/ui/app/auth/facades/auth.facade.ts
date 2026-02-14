import { inject, Injectable } from "@angular/core";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { RegisterOrganizationPort } from "@core/auth/port/in/register-organization.port";
import { LOGIN_WITH_CREDENTIALS_TOKEN } from "@data/auth/token/in/login-with-credentials.token";
import { REGISTER_ORGANIZATION_TOKEN } from "@data/auth/token/in/register-organization.token";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

@Injectable()
export class AuthFacade {
  private readonly loginUseCase: LoginWithCredentialsPort = inject(LOGIN_WITH_CREDENTIALS_TOKEN);
  private readonly registerUseCase: RegisterOrganizationPort = inject(REGISTER_ORGANIZATION_TOKEN);

  loginWithCredentials(command: ICredentialsCommand) {
    return this.loginUseCase.execute(command);
  }

  registerOrganization(command: IRegisterOrganizationCommand) {
    return this.registerUseCase.execute(command);
  }
}
