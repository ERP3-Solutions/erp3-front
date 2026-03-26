import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { IAuthTokenDTO } from "@core/auth/domain/dto/IAuthToken.dto";
import { UserRepositoryPort } from "@core/auth/port/out/user-repository.port";
import { API_URL } from "@environment/api.context";
import { UserRepositoryErrors } from "@infrastructure/auth/errors/user-repository.errors";
import { IApiErrorDTO } from "@infrastructure/shared/dto/api-error.dto";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

@Injectable()
export class UserRepositoryAdapter implements UserRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  private authUrl = `${API_URL}/v1/auth`

  async loginWithCredentials(params: ICredentialsCommand) {
    try {
      const { data } = await firstValueFrom(this._httpClient.post<IApiResponseDTO<IAuthTokenDTO>>(`${this.authUrl}/login`, params));
      return data;
    } catch (e: unknown) {
      const err = ((e as HttpErrorResponse).error) as IApiErrorDTO;
      if (err && Object.hasOwn(UserRepositoryErrors, err.title)) {
        throw UserRepositoryErrors[err.title as keyof typeof UserRepositoryErrors]
      }
      throw e;
    }
  }
}