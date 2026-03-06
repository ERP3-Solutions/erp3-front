import { InjectionToken } from "@angular/core";
import { DeleteUserPort } from "@core/dashboard/security/port/in/user/delete-user.port";

export const DELETE_USER_TOKEN =
  new InjectionToken<DeleteUserPort>(
    'DELETE_USER_TOKEN'
  );
