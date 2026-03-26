import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IRoleEntity } from "@core/roles/domain/entity/role.entity";
import { RoleRepositoryPort } from "@core/roles/port/out/role-repository.port";
import { API_URL } from "@environment/api.context";
import { UserRepositoryErrors } from "@infrastructure/auth/errors/user-repository.errors";
import { IApiErrorDTO } from "@infrastructure/shared/dto/api-error.dto";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

@Injectable()
export class RoleRepositoryAdapter implements RoleRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  private rolesUrl = `${API_URL}/v1/roles`

  async obtainRolesByOrganization(): Promise<IRoleEntity[]> {
    try {
      const { data } = await firstValueFrom(
        this._httpClient.get<IApiResponseDTO<IRoleEntity[]>>(this.rolesUrl)
      );
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
