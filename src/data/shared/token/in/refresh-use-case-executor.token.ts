import { InjectionToken } from "@angular/core";
import { RefreshUseCaseExecutorPort } from "@core/shared/port/in/refresh-use-case-executor.port";

export const REFRESH_USE_CASE_EXECUTOR_TOKEN =
  new InjectionToken<RefreshUseCaseExecutorPort<unknown>>(
    'REFRESH_USE_CASE_EXECUTOR_TOKEN'
  );