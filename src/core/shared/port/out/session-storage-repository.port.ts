export interface SessionStorageRepositoryPort {
  save<T>(key: string, object: T): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  get<T>(token: string): Promise<T | null>;
}