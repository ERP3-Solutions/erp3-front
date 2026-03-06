import { UseCase } from '@base/use-case';
import { IRegisterOrganizationCommand } from '@core/dashboard/organization/domain/command/organization/register-organization.command';
import { IOrganizationEntity } from '@core/dashboard/organization/domain/entity/organization.entity';

export type RegisterOrganizationPort = UseCase<
  IRegisterOrganizationCommand,
  IOrganizationEntity
>;
