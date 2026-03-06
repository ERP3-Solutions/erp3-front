import { IChangeStateBranchCommand } from '../../domain/command/organization-branches/change-state-branch.command';
import { IRegisterBranchCommand } from '../../domain/command/organization-branches/register-branch.command';
import { IRemoveBranchCommand } from '../../domain/command/organization-branches/remove-branch.command';
import { IUpdateBranchCommand } from '../../domain/command/organization-branches/update-branch.command';
import { IOrganizationBranchEntity } from '../../domain/entity/organization-branch.entity';
import { IGetBranchesQuery } from '../../domain/query/organization-branches/get-branches.query';

export interface IOrganizationBranchesRepositoryPort {
  registerBranch(
    command: IRegisterBranchCommand,
  ): Promise<IOrganizationBranchEntity>;

  updateBranch(
    command: IUpdateBranchCommand,
  ): Promise<IOrganizationBranchEntity>;

  removeBranch(command: IRemoveBranchCommand): Promise<boolean>;

  changeStateBranch(
    command: IChangeStateBranchCommand,
  ): Promise<boolean>;

  getBranches(
    query: IGetBranchesQuery,
  ): Promise<IOrganizationBranchEntity[]>;
}
