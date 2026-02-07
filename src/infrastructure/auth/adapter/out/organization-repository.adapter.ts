import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";
import { SECURITY_API } from "@environment/api.context";
import { firstValueFrom } from "rxjs";

@Injectable()
export class OrganizationRepositoryAdapter extends OrganizationRepositoryPort {
  public constructor(
    private httpClient: HttpClient
  ) {
    super();
  }

  async registerOrganization(params: IRegisterOrganizationCommand) {
    await firstValueFrom(this.httpClient.post<void>(SECURITY_API, params));
  }
}