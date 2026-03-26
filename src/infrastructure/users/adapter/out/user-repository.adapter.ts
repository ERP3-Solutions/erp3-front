import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IUserEntity } from "@core/users/domain/entity/user.entity";
import { UserRepositoryPort } from "@core/users/port/out/user-repository.port";
import { API_URL } from "@environment/api.context";
import { AuthRepositoryErrors } from "@infrastructure/auth/errors/auth-repository.errors";
import { IApiErrorDTO } from "@infrastructure/shared/dto/api-error.dto";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

@Injectable()
export class UserRepositoryAdapter implements UserRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  private usersUrl = `${API_URL}/v1/users`

  async obtainUsersByOrganization(): Promise<IUserEntity[]> {
    try {
      const { data } = await firstValueFrom(
        this._httpClient.get<IApiResponseDTO<IUserEntity[]>>(this.usersUrl)
      );
      return data;
    } catch (e: unknown) {
      const err = ((e as HttpErrorResponse).error) as IApiErrorDTO;
      if (err && Object.hasOwn(AuthRepositoryErrors, err.title)) {
        throw AuthRepositoryErrors[err.title as keyof typeof AuthRepositoryErrors]
      }
      throw e;
    }
  }
}
