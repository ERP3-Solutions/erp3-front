import { InjectionToken } from "@angular/core";
import { RefreshSessionPort } from "@core/shared/port/in/refresh-session.port";

export const REFRESH_SESSION_TOKEN =
  new InjectionToken<RefreshSessionPort>(
    'REFRESH_SESSION_TOKEN'
  );