import { Injectable } from "@angular/core";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";

@Injectable()
export class SessionStorageRepositoryAdapter implements SessionStorageRepositoryPort {

  async save<T>(key: string, value: T): Promise<void> {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      throw new Error(
        `SessionStorage: failed to save key "${key}"`
      );
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as T;
    } catch {
      throw new Error(
        `SessionStorage: failed to parse value for key "${key}"`
      );
    }
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }

  async clear(): Promise<void> {
    localStorage.clear();
  }
}
