import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

export abstract class OrganizationRepositoryPort {
  abstract registerOrganization(params: IRegisterOrganizationCommand): Promise<void>;
}