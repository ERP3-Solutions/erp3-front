import { InjectionToken } from "@angular/core";
import { DisableUserPort } from "@core/dashboard/security/port/in/user/disable-user.port";

export const DISABLE_USER_TOKEN =
  new InjectionToken<DisableUserPort>(
    'DISABLE_USER_TOKEN'
  );
