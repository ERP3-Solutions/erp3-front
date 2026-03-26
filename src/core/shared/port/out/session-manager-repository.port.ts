import { IAuthTokenDTO } from "@core/auth/domain/dto/IAuthToken.dto";

export interface SessionManagerRepositoryPort {
  /**
   * @param params old token information
   */
  refreshSessionByToken(params: IAuthTokenDTO): Promise<IAuthTokenDTO>;
}