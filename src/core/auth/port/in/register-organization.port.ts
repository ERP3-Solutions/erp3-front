import { InjectionToken } from "@angular/core";
import { UseCase } from "@base/use-case";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

export interface RegisterOrganizationPort extends UseCase<IRegisterOrganizationCommand, void> { }

export const REGISTER_ORGANIZATION_PORT =
  new InjectionToken<RegisterOrganizationPort>(
    'REGISTER_ORGANIZATION_PORT'
  );