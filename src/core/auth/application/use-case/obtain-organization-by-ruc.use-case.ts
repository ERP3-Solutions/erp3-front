import { ObtainOrganizationByRucPort } from "@core/auth/port/in/obtain-organization-by-ruc.port";
import { OrganizationRepositoryPort } from "@core/auth/port/out/organization-repository.port";

export class ObtainOrganizationByRucUseCase implements ObtainOrganizationByRucPort {
  public constructor(
    private organizationRepositoryPort: OrganizationRepositoryPort
  ) { }

  async execute(ruc: string) {
    return this.organizationRepositoryPort.obtainOrganizationInfoByRUC(ruc);
  };  
}