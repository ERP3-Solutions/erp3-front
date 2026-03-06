import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { IChangeStateBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/change-state-branch.command';
import { IRegisterBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/register-branch.command';
import { IRemoveBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/remove-branch.command';
import { IUpdateBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/update-branch.command';
import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';
import { IGetBranchesQuery } from '@core/dashboard/organization/domain/query/organization-branches/get-branches.query';
import { IOrganizationBranchesRepositoryPort } from '@core/dashboard/organization/port/out/organization-branches-repository.port';
import { API_URL } from '@environment/api.context';
import { IApiResponseDTO } from '@infrastructure/shared/dto/api-response.dto';
import { firstValueFrom } from 'rxjs';

export class OrganizationBranchesRepositoryAdapter
  implements IOrganizationBranchesRepositoryPort
{
  private _httpClient = inject(HttpClient);

  private readonly baseUrl = `${API_URL}/v1/organizations/branches`;

  async registerBranch(
    command: IRegisterBranchCommand,
  ): Promise<IOrganizationBranchEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IOrganizationBranchEntity>>(
        this.baseUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateBranch(
    command: IUpdateBranchCommand,
  ): Promise<IOrganizationBranchEntity> {
    const { branchId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IOrganizationBranchEntity>>(
        `${this.baseUrl}/${branchId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async removeBranch(command: IRemoveBranchCommand): Promise<boolean> {
    const response = await firstValueFrom(
      this._httpClient.delete<IApiResponseDTO<boolean>>(
        `${this.baseUrl}/${command.branchId}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async changeStateBranch(
    command: IChangeStateBranchCommand,
  ): Promise<boolean> {
    const response = await firstValueFrom(
      this._httpClient.patch<IApiResponseDTO<boolean>>(
        `${this.baseUrl}/${command.branchId}/state`,
        {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getBranches(
    query: IGetBranchesQuery,
  ): Promise<IOrganizationBranchEntity[]> {
    const params: Record<string, string> = {};
    if (query.isActive !== undefined)
      params['isActive'] = String(query.isActive);

    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IOrganizationBranchEntity[]>>(
        this.baseUrl,
        Object.keys(params).length ? { params } : {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data ?? [];
  }
}
