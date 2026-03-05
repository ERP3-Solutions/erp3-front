import { inject, Injectable } from "@angular/core";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { LOGIN_WITH_CREDENTIALS_TOKEN } from "@data/auth/token/in/login-with-credentials.token";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { RegisterOrganizationPort } from "@core/auth/port/in/register-organization.port";
import { ObtainOrganizationByRucPort } from "@core/auth/port/in/obtain-organization-by-ruc.port";
import { REGISTER_ORGANIZATION_TOKEN } from "@data/auth/token/in/register-organization.token";
import { OBTAIN_ORGANIZATION_BY_RUC_TOKEN } from "@data/auth/token/in/obtain-organization-by-ruc.token";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { ObtainPlansPort } from "@core/shared/port/in/obtain-plans.port";
import { OBTAIN_PLANS_TOKEN } from "@data/shared/token/in/obtain-plans.token";

@Injectable()
export class AuthFacade {
  private readonly loginUseCase: LoginWithCredentialsPort = inject(LOGIN_WITH_CREDENTIALS_TOKEN);
  private readonly registerUseCase: RegisterOrganizationPort = inject(REGISTER_ORGANIZATION_TOKEN);
  private readonly obtainOrganizationByRucUseCase: ObtainOrganizationByRucPort = inject(OBTAIN_ORGANIZATION_BY_RUC_TOKEN);
  private readonly obtainPlansUseCase: ObtainPlansPort = inject(OBTAIN_PLANS_TOKEN);

  loginWithCredentials(command: ICredentialsCommand) {
    return this.loginUseCase.execute(command);
  }

  registerOrganization(command: IRegisterOrganizationCommand) {
    return this.registerUseCase.execute(command);
  }

  obtainOrganizationByRuc(ruc: string) {
    return this.obtainOrganizationByRucUseCase.execute(ruc);
  }

  obtainPlans() {
    return this.obtainPlansUseCase.execute();
  }
}
