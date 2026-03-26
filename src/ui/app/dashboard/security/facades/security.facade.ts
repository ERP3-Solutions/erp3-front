import { inject, Injectable } from "@angular/core";
import { ObtainRolesByOrganizationPort } from "@core/roles/port/in/obtain-roles-by-organization.port";
import { OBTAIN_ROLES_BY_ORGANIZATION_TOKEN } from "@data/roles/token/in/obtain-roles-by-organization.token";

@Injectable()
export class SecurityFacade {
  private readonly obtainRolesByOrganizationUseCase: ObtainRolesByOrganizationPort = inject(OBTAIN_ROLES_BY_ORGANIZATION_TOKEN);

  obtainAllRoles() {
    return this.obtainRolesByOrganizationUseCase.execute();
  }
}
