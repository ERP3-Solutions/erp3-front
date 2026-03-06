import { UseCase } from '@base/use-case';
import { IUpdateBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/update-branch.command';
import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';

export type UpdateBranchPort = UseCase<
  IUpdateBranchCommand,
  IOrganizationBranchEntity
>;
