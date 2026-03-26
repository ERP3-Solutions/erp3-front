import { SessionErrors } from "../errors/session.errors";
import { RefreshSessionPort } from "@core/shared/port/in/refresh-session.port";
import { RefreshUseCaseExecutorPort } from "@core/shared/port/in/refresh-use-case-executor.port";

export class RefreshUseCaseExecutor<T> implements RefreshUseCaseExecutorPort<T> {
  constructor(private refreshTokenUseCase: RefreshSessionPort) { }

  async execute(useCase: () => Promise<T>): Promise<T> {
    try {
      return await useCase();
    } catch (e) {
      const err = (e as keyof typeof SessionErrors)
      if (err && err === SessionErrors.SESSION_EXPIRED) {
        await this.refreshTokenUseCase.execute();
        return await useCase();
      }

      throw e;
    }
  }
}