import { Injectable } from "@angular/core";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";

@Injectable()
export class SessionStorageRepositoryAdapter implements SessionStorageRepositoryPort {

  save<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, typeof value !== 'string' ? JSON.stringify(value) : value);
    } catch {
      throw new Error(
        `SessionStorage: failed to save key "${key}"`
      );
    }
  }

  get<T>(key: string): T | null {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return null;
    }

    try {
      return raw as T;
    } catch {
      throw new Error(
        `SessionStorage: failed to parse value for key "${key}"`
      );
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
