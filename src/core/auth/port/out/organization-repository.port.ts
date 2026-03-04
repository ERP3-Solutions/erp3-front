import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { ICompanyRucEntity } from "@core/auth/domain/entity/company-ruc.entity";

export interface OrganizationRepositoryPort {
  registerOrganization(params: IRegisterOrganizationCommand): Promise<void>;

  obtainOrganizationInfoByRUC(ruc: string): Promise<ICompanyRucEntity>;
}