import { UseCase } from '@base/use-case';
import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';
import { IGetBranchesQuery } from '@core/dashboard/organization/domain/query/organization-branches/get-branches.query';

export type GetBranchesPort = UseCase<
  IGetBranchesQuery,
  IOrganizationBranchEntity[]
>;
