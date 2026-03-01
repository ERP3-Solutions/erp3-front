import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";

export interface UserRepositoryPort {
  loginWithCredentials(params: ICredentialsCommand): Promise<string>;
}