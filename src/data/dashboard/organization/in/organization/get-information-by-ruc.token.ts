import { InjectionToken } from "@angular/core";
import { GetInformationByRucPort } from "@core/dashboard/organization/port/in/organization/get-information-by-ruc.port";

export const GET_INFORMATION_BY_RUC_TOKEN =
  new InjectionToken<GetInformationByRucPort>(
    'GET_INFORMATION_BY_RUC_TOKEN'
  );
