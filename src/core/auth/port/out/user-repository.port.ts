import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";

export abstract class UserRepositoryPort {
  abstract loginWithCredentials(params: ICredentialsCommand): Promise<string>;
}