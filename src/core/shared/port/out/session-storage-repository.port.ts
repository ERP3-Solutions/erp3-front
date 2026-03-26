export interface SessionStorageRepositoryPort {
  save<T>(key: string, object: T): void;
  remove(key: string): void;
  clear(): void;
  get<T>(token: string): T | null;
}