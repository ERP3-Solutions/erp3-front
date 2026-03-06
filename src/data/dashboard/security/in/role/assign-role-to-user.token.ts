import { InjectionToken } from "@angular/core";
import { AssignRoleToUserPort } from "@core/dashboard/security/port/in/user/assign-role-to-user.port";

export const ASSIGN_ROLE_TO_USER_TOKEN =
  new InjectionToken<AssignRoleToUserPort>(
    'ASSIGN_ROLE_TO_USER_TOKEN'
  );
