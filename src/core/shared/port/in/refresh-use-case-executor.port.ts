import { UseCase } from "@base/use-case";

export type RefreshUseCaseExecutorPort<T = void> = UseCase<() => Promise<T>, T>