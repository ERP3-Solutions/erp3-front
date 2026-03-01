import { InjectionToken } from "@angular/core";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";

export const USER_REPOSITORY_TOKEN =
  new InjectionToken<UserRepositoryPort>(
    'USER_REPOSITORY_TOKEN'
  );