import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { IAssignPermissionsToRoleCommand } from "@core/dashboard/security/domain/command/role/assign-permissions-to-role.command";
import { IRegisterRoleCommand } from "@core/dashboard/security/domain/command/role/register-role.command";
import { IUpdateRoleCommand } from "@core/dashboard/security/domain/command/role/update-role.command";
import { IRolePermissionsEntity } from "@core/dashboard/security/domain/entity/role/role-permissions.entity";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";
import { IGetPermissionsQuery } from "@core/dashboard/security/domain/query/role/get-permissions.query";
import { RoleRepositoryPort } from "@core/dashboard/security/port/out/role-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

export class RoleRepositoryAdapter implements RoleRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient);

  private roleUrl = `${API_URL}/v1/roles`;
  private permissionsUrl = `${API_URL}/v1/permissions`;

  async assignPermissionsToRole(
    command: IAssignPermissionsToRoleCommand,
  ): Promise<IRoleEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IRoleEntity>>(
        `${this.roleUrl}/${command.roleId}/permissions`,
        { permissionCodes: command.permissionCodes },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getPermissions(
    _query: IGetPermissionsQuery,
  ): Promise<IRolePermissionsEntity[]> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IRolePermissionsEntity[]>>(
        this.permissionsUrl,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data ?? [];
  }

  async registerRole(command: IRegisterRoleCommand): Promise<IRoleEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IRoleEntity>>(
        this.roleUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateRole(command: IUpdateRoleCommand): Promise<IRoleEntity> {
    const { roleId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IRoleEntity>>(
        `${this.roleUrl}/${roleId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
}
