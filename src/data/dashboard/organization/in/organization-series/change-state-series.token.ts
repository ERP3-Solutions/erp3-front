import { InjectionToken } from "@angular/core";
import { ChangeStateSeriesPort } from "@core/dashboard/organization/port/in/organization-series/change-state-series.port";

export const CHANGE_STATE_SERIES_TOKEN =
  new InjectionToken<ChangeStateSeriesPort>(
    'CHANGE_STATE_SERIES_TOKEN'
  );
