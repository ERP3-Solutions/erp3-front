import { InjectionToken } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

export interface LoginWithCredentialsPort extends UseCase<IRegisterOrganizationCommand, void> { }

export const LOGIN_WITH_CREDENTIALS_PORT =
  new InjectionToken<LoginWithCredentialsPort>(
    'LOGIN_WITH_CREDENTIALS_PORT'
  );