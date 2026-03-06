import { InjectionToken } from "@angular/core";
import { EnableUserPort } from "@core/dashboard/security/port/in/user/enable-user.port";

export const ENABLE_USER_TOKEN =
  new InjectionToken<EnableUserPort>(
    'ENABLE_USER_TOKEN'
  );
