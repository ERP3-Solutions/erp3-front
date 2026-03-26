import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { AuthRepositoryPort } from "@core/auth/port/out/auth-repository.port";
import { AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "@core/shared/application/constant/auth-tokens.constant";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";

export class LoginWithCredentialsUseCase implements LoginWithCredentialsPort {
  public constructor(
    private authRepo: AuthRepositoryPort,
    private sessionStorageRepository: SessionStorageRepositoryPort,
  ) { }

  async execute(params: ICredentialsCommand) {
    const token = await this.authRepo.loginWithCredentials(params);
    this.sessionStorageRepository.save(AUTH_ACCESS_TOKEN, token.accessToken);
    this.sessionStorageRepository.save(AUTH_REFRESH_TOKEN, token.refreshToken);
  };
}