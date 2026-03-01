import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

export interface OrganizationRepositoryPort {
  registerOrganization(params: IRegisterOrganizationCommand): Promise<void>;
}