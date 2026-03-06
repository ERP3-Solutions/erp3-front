import { UseCase } from '@base/use-case';
import { IUpdateOrganizationCommand } from '@core/dashboard/organization/domain/command/organization/update-organization.command';
import { IOrganizationEntity } from '@core/dashboard/organization/domain/entity/organization.entity';

export type UpdateOrganizationPort = UseCase<
  IUpdateOrganizationCommand,
  IOrganizationEntity
>;
