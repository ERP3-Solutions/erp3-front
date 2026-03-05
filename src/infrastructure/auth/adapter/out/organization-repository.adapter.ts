import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { ICompanyRucEntity } from "@core/auth/domain/entity/company-ruc.entity";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";
import { API_URL } from "@environment/api.context";
import { IApiResponseDTO } from "@infrastructure/shared/dto/api-response.dto";
import { firstValueFrom } from "rxjs";

@Injectable()
export class OrganizationRepositoryAdapter implements OrganizationRepositoryPort {
  private _httpClient: HttpClient = inject(HttpClient)

  private rucUrl = `${API_URL}/v1/ruc`
  private organizationUrl = `${API_URL}/v1/organizations`

  async registerOrganization(params: IRegisterOrganizationCommand) {
    await firstValueFrom(this._httpClient.post<void>(this.organizationUrl, params));
  }

  async obtainOrganizationInfoByRUC(ruc: string): Promise<ICompanyRucEntity> {
    const response = await firstValueFrom(
      this._httpClient.get<IApiResponseDTO<ICompanyRucEntity>>(`${this.rucUrl}/${ruc}`)
    );
    if (!response.success) throw new Error(response.message)
    return response.data;
  }
}