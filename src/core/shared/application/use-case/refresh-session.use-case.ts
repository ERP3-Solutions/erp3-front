import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";
import { SessionManagerRepositoryPort } from "@core/shared/port/out/session-manager-repository.port";
import { AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "@core/shared/application/constant/auth-tokens.constant";
import { RefreshSessionPort } from "@core/shared/port/in/refresh-session.port";

export class RefreshSessionUseCase implements RefreshSessionPort {
  public constructor(
    private sessionManagerRepo: SessionManagerRepositoryPort,
    private sessionStorageRepository: SessionStorageRepositoryPort,
  ) { }

  async execute() {
    const accessToken = this.sessionStorageRepository.get<string>(AUTH_ACCESS_TOKEN);
    const refreshToken = this.sessionStorageRepository.get<string>(AUTH_REFRESH_TOKEN);

    if (!accessToken || !refreshToken) return;

    const token = await this.sessionManagerRepo.refreshSessionByToken({
      accessToken,
      refreshToken
    });

    this.sessionStorageRepository.save(AUTH_ACCESS_TOKEN, token.accessToken);
    this.sessionStorageRepository.save(AUTH_REFRESH_TOKEN, token.refreshToken);
  };
}