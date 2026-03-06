import { InjectionToken } from "@angular/core";
import { GetPermissionsPort } from "@core/dashboard/security/port/in/role/get-permissions.port";

export const GET_PERMISSIONS_TOKEN =
  new InjectionToken<GetPermissionsPort>(
    'GET_PERMISSIONS_TOKEN'
  );
