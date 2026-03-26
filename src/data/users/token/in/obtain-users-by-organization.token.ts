import { InjectionToken } from "@angular/core";
import { ObtainUsersByOrganizationPort } from "@core/users/port/in/obtain-users-by-organization.port";

export const OBTAIN_USERS_BY_ORGANIZATION_TOKEN =
  new InjectionToken<ObtainUsersByOrganizationPort>(
    'OBTAIN_USERS_BY_ORGANIZATION_TOKEN'
  );