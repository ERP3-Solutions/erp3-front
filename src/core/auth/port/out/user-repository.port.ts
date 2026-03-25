import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { IAuthTokenDTO } from "@core/auth/domain/dto/IAuthToken.dto";

export interface UserRepositoryPort {
  /**
   * @throws LoginErrors.USER_NOT_FOUND
   * 
   * @param params login credentials
   */
  loginWithCredentials(params: ICredentialsCommand): Promise<IAuthTokenDTO>;
}