import { InjectionToken } from "@angular/core";
import { ObtainOrganizationByRucPort } from "@core/auth/port/in/obtain-organization-by-ruc.port";

export const OBTAIN_ORGANIZATION_BY_RUC_TOKEN =
  new InjectionToken<ObtainOrganizationByRucPort>(
    'OBTAIN_ORGANIZATION_BY_RUC_TOKEN'
  );