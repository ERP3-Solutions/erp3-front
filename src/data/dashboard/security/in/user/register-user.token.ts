import { InjectionToken } from "@angular/core";
import { RegisterUserPort } from "@core/dashboard/security/port/in/user/register-user.port";

export const REGISTER_USER_TOKEN =
  new InjectionToken<RegisterUserPort>(
    'REGISTER_USER_TOKEN'
  );
