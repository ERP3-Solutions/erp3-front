import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { IChangeStateCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/change-state-category.command';
import { IRegisterCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/register-category.command';
import { IUpdateCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/update-category.command';
import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';
import { IGetCategoriesQuery } from '@core/dashboard/organization/domain/query/organization-categories/get-categories.query';
import { IOrganizationCategoriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-categories-repository.port';
import { API_URL } from '@environment/api.context';
import { IApiResponseDTO } from '@infrastructure/shared/dto/api-response.dto';
import { firstValueFrom } from 'rxjs';

export class OrganizationCategoriesRepositoryAdapter
  implements IOrganizationCategoriesRepositoryPort
{
  private _httpClient = inject(HttpClient);

  private readonly baseUrl = `${API_URL}/v1/organizations/categories`;

  async registerCategory(
    command: IRegisterCategoryCommand,
  ): Promise<IOrganizationCategoryEntity> {
    const response = await firstValueFrom(
      this._httpClient.post<IApiResponseDTO<IOrganizationCategoryEntity>>(
        this.baseUrl,
        command,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async updateCategory(
    command: IUpdateCategoryCommand,
  ): Promise<IOrganizationCategoryEntity> {
    const { categoryId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<IOrganizationCategoryEntity>>(
        `${this.baseUrl}/${categoryId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async changeStateCategory(
    command: IChangeStateCategoryCommand,
  ): Promise<boolean> {
    const response = await firstValueFrom(
      this._httpClient.patch<IApiResponseDTO<boolean>>(
        `${this.baseUrl}/${command.categoryId}/state`,
        {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getCategories(
    query: IGetCategoriesQuery,
  ): Promise<IOrganizationCategoryEntity[]> {
    const params: Record<string, string> = {};
    if (query.isActive !== undefined)
      params['isActive'] = String(query.isActive);

    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IOrganizationCategoryEntity[]>>(
        this.baseUrl,
        Object.keys(params).length ? { params } : {},
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data ?? [];
  }
}
