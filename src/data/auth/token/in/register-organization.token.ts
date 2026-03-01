import { InjectionToken } from "@angular/core";
import { RegisterOrganizationPort } from "@core/auth/port/in/register-organization.port";

export const REGISTER_ORGANIZATION_TOKEN =
  new InjectionToken<RegisterOrganizationPort>(
    'REGISTER_ORGANIZATION_TOKEN'
  );