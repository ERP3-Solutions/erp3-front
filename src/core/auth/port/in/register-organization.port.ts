import { UseCase } from "@base/use-case";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

export type RegisterOrganizationPort = UseCase<IRegisterOrganizationCommand, void>