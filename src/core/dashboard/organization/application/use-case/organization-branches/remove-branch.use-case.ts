import { IRemoveBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/remove-branch.command';
import { RemoveBranchPort } from '@core/dashboard/organization/port/in/organization-branches/remove-branch.port';
import { IOrganizationBranchesRepositoryPort } from '@core/dashboard/organization/port/out/organization-branches-repository.port';

export class RemoveBranchUseCase implements RemoveBranchPort {
  constructor(
    private readonly organizationBranchesRepository: IOrganizationBranchesRepositoryPort,
  ) {}

  async execute(params: IRemoveBranchCommand): Promise<boolean> {
    return this.organizationBranchesRepository.removeBranch(params);
  }
}
