import { InjectionToken } from "@angular/core";
import { UpdateOrganizationPort } from "@core/dashboard/organization/port/in/organization/update-organization.port";

export const UPDATE_ORGANIZATION_TOKEN =
  new InjectionToken<UpdateOrganizationPort>(
    'UPDATE_ORGANIZATION_TOKEN'
  );
