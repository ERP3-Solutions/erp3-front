import { InjectionToken } from "@angular/core";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";

export const SESSION_STORAGE_TOKEN =
  new InjectionToken<SessionStorageRepositoryPort>(
    'SESSION_STORAGE_TOKEN'
  );