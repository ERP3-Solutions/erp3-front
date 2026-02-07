import { InjectionToken } from "@angular/core";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";

export const LOGIN_WITH_CREDENTIALS_TOKEN =
  new InjectionToken<LoginWithCredentialsPort>(
    'LOGIN_WITH_CREDENTIALS_TOKEN'
  );