import { InjectionToken } from "@angular/core";
import { ListUserPort } from "@core/dashboard/security/port/in/user/list-user.port";

export const LIST_USER_TOKEN =
  new InjectionToken<ListUserPort>(
    'LIST_USER_TOKEN'
  );
