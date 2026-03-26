import { InjectionToken } from "@angular/core";
import { AuthRepositoryPort } from "@core/auth/port/out/auth-repository.port";

export const AUTH_REPOSITORY_TOKEN =
  new InjectionToken<AuthRepositoryPort>(
    'AUTH_REPOSITORY_TOKEN'
  );