import { InjectionToken } from "@angular/core";
import { UpdateUserPort } from "@core/dashboard/security/port/in/user/update-user.port";

export const UPDATE_USER_TOKEN =
  new InjectionToken<UpdateUserPort>(
    'UPDATE_USER_TOKEN'
  );
