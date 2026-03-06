import { UseCase } from '@base/use-case';
import { IRegisterBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/register-branch.command';
import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';

export type RegisterBranchPort = UseCase<
  IRegisterBranchCommand,
  IOrganizationBranchEntity
>;
