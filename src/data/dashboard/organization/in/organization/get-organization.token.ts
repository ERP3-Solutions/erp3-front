import { InjectionToken } from "@angular/core";
import { GetOrganizationPort } from "@core/dashboard/organization/port/in/organization/get-organization.port";

export const GET_ORGANIZATION_TOKEN =
  new InjectionToken<GetOrganizationPort>(
    'GET_ORGANIZATION_TOKEN'
  );
