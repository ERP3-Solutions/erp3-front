import { inject, Injectable } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { RegisterOrganizationPort } from "@core/auth/port/in/register-organization.port";
import { LOGIN_WITH_CREDENTIALS_TOKEN } from "@data/auth/token/in/login-with-credentials.token";
import { REGISTER_ORGANIZATION_TOKEN } from "@data/auth/token/in/register-organization.token";
import { AuthStore } from "../store/auth.store";

@Injectable()
export class AuthFacade {
  private readonly store: AuthStore = inject(AuthStore);

  private readonly login: LoginWithCredentialsPort = inject(LOGIN_WITH_CREDENTIALS_TOKEN);
  private readonly register: RegisterOrganizationPort = inject(REGISTER_ORGANIZATION_TOKEN);

  setFormLogin(newForm: ICredentialsCommand) {
    this.store.formLogin.set(newForm);
  }

  loginWithCredentials(command: ICredentialsCommand) {
    return this.login.execute(command);
  }

  registerOrganization(command: IRegisterOrganizationCommand) {
    return this.register.execute(command);
  }
}
