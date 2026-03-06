import { IOrganizationBranchEntity } from '@core/dashboard/organization/domain/entity/organization-branch.entity';
import { IGetBranchesQuery } from '@core/dashboard/organization/domain/query/organization-branches/get-branches.query';
import { GetBranchesPort } from '@core/dashboard/organization/port/in/organization-branches/get-branches.port';
import { IOrganizationBranchesRepositoryPort } from '@core/dashboard/organization/port/out/organization-branches-repository.port';

export class GetBranchesUseCase implements GetBranchesPort {
  constructor(
    private readonly organizationBranchesRepository: IOrganizationBranchesRepositoryPort,
  ) {}

  async execute(params: IGetBranchesQuery): Promise<IOrganizationBranchEntity[]> {
    return this.organizationBranchesRepository.getBranches(params);
  }
}
