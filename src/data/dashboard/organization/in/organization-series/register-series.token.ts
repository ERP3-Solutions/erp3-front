import { InjectionToken } from "@angular/core";
import { RegisterSeriesPort } from "@core/dashboard/organization/port/in/organization-series/register-series.port";

export const REGISTER_SERIES_TOKEN =
  new InjectionToken<RegisterSeriesPort>(
    'REGISTER_SERIES_TOKEN'
  );
