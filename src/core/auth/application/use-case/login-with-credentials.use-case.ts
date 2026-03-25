import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";
import { AUTH_ACCESS_TOKEN, AUTH_REFRESH_TOKEN } from "../constant/auth-tokens.constant";

export class LoginWithCredentialsUseCase implements LoginWithCredentialsPort {
  public constructor(
    private userRepository: UserRepositoryPort,
    private sessionStorageRepository: SessionStorageRepositoryPort,
  ) { }

  async execute(params: ICredentialsCommand) {
    const token = await this.userRepository.loginWithCredentials(params);
    this.sessionStorageRepository.save(AUTH_ACCESS_TOKEN, token.accessToken);
    this.sessionStorageRepository.save(AUTH_REFRESH_TOKEN, token.refreshToken);
  };
}