import { IOrganizationEntity } from '@core/dashboard/organization/domain/entity/organization.entity';
import { IGetOrganizationQuery } from '@core/dashboard/organization/domain/query/organization/get-organization.query';
import { GetOrganizationPort } from '@core/dashboard/organization/port/in/organization/get-organization.port';
import { IOrganizationRepositoryPort } from '@core/dashboard/organization/port/out/organization-repository.port';

export class GetOrganizationUseCase implements GetOrganizationPort {
  constructor(
    private readonly organizationRepository: IOrganizationRepositoryPort,
  ) {}

  async execute(params: IGetOrganizationQuery): Promise<IOrganizationEntity> {
    return this.organizationRepository.getOrganization(params);
  }
}
