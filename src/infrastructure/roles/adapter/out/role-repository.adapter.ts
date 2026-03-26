import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IRoleEntity } from "@core/roles/domain/entity/role.entity";
import { RoleRepositoryPort } from "@core/roles/port/out/role-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

@Injectable()
export class RoleRepositoryAdapter implements RoleRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  private rolesUrl = `${API_URL}/v1/roles`

  async obtainRolesByOrganization(): Promise<IRoleEntity[]> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IRoleEntity[]>>(this.rolesUrl)
    );
    if (!response.success) throw new Error(response.message)
    return response.data;
  }
}
