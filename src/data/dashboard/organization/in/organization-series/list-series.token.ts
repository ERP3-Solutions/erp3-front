import { InjectionToken } from "@angular/core";
import { ListSeriesPort } from "@core/dashboard/organization/port/in/organization-series/list-series.port";

export const LIST_SERIES_TOKEN =
  new InjectionToken<ListSeriesPort>(
    'LIST_SERIES_TOKEN'
  );
