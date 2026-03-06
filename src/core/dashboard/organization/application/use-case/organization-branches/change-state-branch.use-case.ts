import { IChangeStateBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/change-state-branch.command';
import { ChangeStateBranchPort } from '@core/dashboard/organization/port/in/organization-branches/change-state-branch.port';
import { IOrganizationBranchesRepositoryPort } from '@core/dashboard/organization/port/out/organization-branches-repository.port';

export class ChangeStateBranchUseCase implements ChangeStateBranchPort {
  constructor(
    private readonly organizationBranchesRepository: IOrganizationBranchesRepositoryPort,
  ) {}

  async execute(params: IChangeStateBranchCommand): Promise<boolean> {
    return this.organizationBranchesRepository.changeStateBranch(params);
  }
}
