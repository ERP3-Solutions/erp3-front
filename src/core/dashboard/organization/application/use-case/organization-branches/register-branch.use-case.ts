import { IRegisterBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/register-branch.command';
import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';
import { RegisterBranchPort } from '@core/dashboard/organization/port/in/organization-branches/register-branch.port';
import { IOrganizationBranchesRepositoryPort } from '@core/dashboard/organization/port/out/organization-branches-repository.port';

export class RegisterBranchUseCase implements RegisterBranchPort {
  constructor(
    private readonly organizationBranchesRepository: IOrganizationBranchesRepositoryPort,
  ) {}

  async execute(params: IRegisterBranchCommand): Promise<IOrganizationBranchEntity> {
    return this.organizationBranchesRepository.registerBranch(params);
  }
}
