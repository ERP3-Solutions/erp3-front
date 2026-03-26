import { UseCase } from "@base/use-case";
import { SessionErrors } from "../errors/session.errors";
import { RefreshSessionPort } from "@core/shared/port/in/refresh-session.port";

export class RefreshUseCaseExecutor<I, O> implements UseCase<I, O> {
  constructor(
    private refreshTokenUseCase: RefreshSessionPort,
    private useCase: UseCase<I, O>
  ) { }

  async execute(params: I): Promise<O> {
    try {
      return await this.useCase.execute(params);
    } catch (e) {
      const err = (e as keyof typeof SessionErrors)
      if (err && err === SessionErrors.SESSION_EXPIRED) {
        await this.refreshTokenUseCase.execute();
        return await this.useCase.execute(params);
      }

      throw e;
    }
  }
}