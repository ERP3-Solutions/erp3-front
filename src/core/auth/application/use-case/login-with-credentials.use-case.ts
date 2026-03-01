import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { LoginWithCredentialsPort } from "@core/auth/port/in/login-with-credentials.port";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";
import { SessionStorageRepositoryPort } from "@core/shared/port/out/session-storage-repository.port";

export class LoginWithCredentialsUseCase implements LoginWithCredentialsPort {
  public constructor(
    private userRepository: UserRepositoryPort,
    private sessionStorageRepository: SessionStorageRepositoryPort,
  ) { }

  async execute(params: ICredentialsCommand) {
    const token = await this.userRepository.loginWithCredentials(params);
    this.sessionStorageRepository.save('token', token);
  };
}