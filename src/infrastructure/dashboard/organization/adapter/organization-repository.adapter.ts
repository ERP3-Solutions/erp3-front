import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { IUpdateOrganizationCommand } from '@core/dashboard/organization/domain/command/organization/update-organization.command';
import { IConsultaRucResponse } from '@core/dashboard/organization/domain/dto/consulta-ruc-response.dto';
import { IPlanListItemDto } from '@core/dashboard/organization/domain/dto/plan-list-item.dto';
import { IOrganizationEntity } from '@core/dashboard/organization/domain/entity/organization.entity';
import { IGetInformationByRucQuery } from '@core/dashboard/organization/domain/query/organization/get-information-by-ruc.query';
import { IGetOrganizationQuery } from '@core/dashboard/organization/domain/query/organization/get-organization.query';
import { IGetPlansQuery } from '@core/dashboard/organization/domain/query/organization/get-plans.query';
import { IOrganizationRepositoryPort } from '@core/dashboard/organization/port/out/organization-repository.port';
import { API_URL } from '@environment/api.context';
import { IApiResponseDTO } from '@infrastructure/shared/dto/api-response.dto';
import { firstValueFrom } from 'rxjs';

export class OrganizationRepositoryAdapter implements IOrganizationRepositoryPort {
  private _httpClient = inject(HttpClient);

  private readonly baseUrl = `${API_URL}/v1`;

  async updateOrganization(
    command: IUpdateOrganizationCommand,
  ): Promise<IOrganizationEntity> {
    const { organizationId, ...body } = command;
    const response = await firstValueFrom(
      this._httpClient.put<IApiResponseDTO<boolean>>(
        `${this.baseUrl}/organizations/${organizationId}`,
        body,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return this.getOrganization({});
  }

  async getInformationByRuc(
    query: IGetInformationByRucQuery,
  ): Promise<IConsultaRucResponse> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IConsultaRucResponse>>(
        `${this.baseUrl}/ruc/${encodeURIComponent(query.ruc)}`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getOrganization(
    _query: IGetOrganizationQuery,
  ): Promise<IOrganizationEntity> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IOrganizationEntity>>(
        `${this.baseUrl}/organizations`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data;
  }

  async getPlans(_query: IGetPlansQuery): Promise<IPlanListItemDto[]> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<IPlanListItemDto[]>>(
        `${this.baseUrl}/organizations/plans`,
      ),
    );
    if (!response.success) throw new Error(response.message);
    return response.data ?? [];
  }
}
