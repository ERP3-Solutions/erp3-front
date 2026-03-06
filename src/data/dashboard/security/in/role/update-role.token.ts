import { InjectionToken } from "@angular/core";
import { UpdateRolePort } from "@core/dashboard/security/port/in/role/update-role.port";

export const UPDATE_ROLE_TOKEN =
  new InjectionToken<UpdateRolePort>(
    'UPDATE_ROLE_TOKEN'
  );
