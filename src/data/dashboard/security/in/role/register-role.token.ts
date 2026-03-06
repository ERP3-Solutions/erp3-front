import { InjectionToken } from "@angular/core";
import { RegisterRolePort } from "@core/dashboard/security/port/in/role/register-role.port";

export const REGISTER_ROLE_TOKEN =
  new InjectionToken<RegisterRolePort>(
    'REGISTER_ROLE_TOKEN'
  );
