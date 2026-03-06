import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { IAssignRoleToUserCommand } from '@core/dashboard/security/domain/command/user/assign-role-to-user.command';
import { IDeleteUserCommand } from '@core/dashboard/security/domain/command/user/delete-user.command';
import { IDisableUserCommand } from '@core/dashboard/security/domain/command/user/disable-user.command';
import { IEnableUserCommand } from '@core/dashboard/security/domain/command/user/enable-user.command';
import { IRegisterUserCommand } from '@core/dashboard/security/domain/command/user/register-user.command';
import { IUpdateUserCommand } from '@core/dashboard/security/domain/command/user/update-user.command';
import { IUserEntity } from '@core/dashboard/security/domain/entity/user/user.entity';
import { IListUserQuery } from '@core/dashboard/security/domain/query/user/list-user.query';
import { UserRepositoryPort } from '@core/dashboard/security/port/out/user-repository.port';
import { API_URL } from '@environment/api.context';
import { IApiResponseDTO } from '@infrastructure/shared/dto/api-response.dto';
import { firstValueFrom } from 'rxjs';

export class UseRepositoryAdapter implements UserRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient);

  private userUrl = `${API_URL}/v1/users`;

  async assignRoleToUser(
    command: IAssignRoleToUserCommand,
  ): Promise<IUserEntity> {
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IUserEntity>>(
        `${this.userUrl}/${command.userId}/roles`,
        { roleIds: command.roleIds },
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async deleteUser(command: IDeleteUserCommand): Promise<IUserEntity> {
    const response = await firstValueFrom(
      this._httpClient.delete<IApiResponseDTO<IUserEntity>>(
        `${this.userUrl}/${command.userId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async disableUser(command: IDisableUserCommand): Promise<IUserEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IUserEntity>>(
        `${this.userUrl}/${command.userId}/disable`,
        {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async enableUser(command: IEnableUserCommand): Promise<IUserEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IUserEntity>>(
        `${this.userUrl}/${command.userId}/enable`,
        {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async listUser(_query: IListUserQuery): Promise<IUserEntity> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IUserEntity[]>>(this.userUrl),
    );
    if (!response.success) throw new Error(response.message);
    return response.data as unknown as IUserEntity;
  }

  async registerUser(command: IRegisterUserCommand): Promise<IUserEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IUserEntity>>(
        this.userUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateUser(command: IUpdateUserCommand): Promise<IUserEntity> {
    const { userId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IUserEntity>>(
        `${this.userUrl}/${userId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }
}
