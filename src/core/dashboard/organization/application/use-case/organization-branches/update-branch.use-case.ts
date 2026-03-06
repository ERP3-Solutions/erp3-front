import { IUpdateBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/update-branch.command';
import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';
import { UpdateBranchPort } from '@core/dashboard/organization/port/in/organization-branches/update-branch.port';
import { IOrganizationBranchesRepositoryPort } from '@core/dashboard/organization/port/out/organization-branches-repository.port';

export class UpdateBranchUseCase implements UpdateBranchPort {
  constructor(
    private readonly organizationBranchesRepository: IOrganizationBranchesRepositoryPort,
  ) {}

  async execute(params: IUpdateBranchCommand): Promise<IOrganizationBranchEntity> {
    return this.organizationBranchesRepository.updateBranch(params);
  }
}
