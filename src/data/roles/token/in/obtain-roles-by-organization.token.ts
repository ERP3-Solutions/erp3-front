import { InjectionToken } from "@angular/core";
import { ObtainRolesByOrganizationPort } from "@core/roles/port/in/obtain-roles-by-organization.port";

export const OBTAIN_ROLES_BY_ORGANIZATION_TOKEN =
  new InjectionToken<ObtainRolesByOrganizationPort>(
    'OBTAIN_ROLES_BY_ORGANIZATION_TOKEN'
  );