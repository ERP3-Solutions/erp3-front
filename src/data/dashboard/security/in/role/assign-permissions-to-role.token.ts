import { InjectionToken } from "@angular/core";
import { AssignPermissionsToRolePort } from "@core/dashboard/security/port/in/role/assign-permissions-to-role.port";

export const ASSIGN_PERMISSIONS_TO_ROLE_TOKEN =
  new InjectionToken<AssignPermissionsToRolePort>(
    'ASSIGN_PERMISSIONS_TO_ROLE_TOKEN'
  );
