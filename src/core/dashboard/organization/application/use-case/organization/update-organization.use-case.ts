import { IUpdateOrganizationCommand } from '@core/dashboard/organization/domain/command/organization/update-organization.command';
import { IOrganizationEntity } from '@core/dashboard/organization/domain/entity/organization.entity';
import { UpdateOrganizationPort } from '@core/dashboard/organization/port/in/organization/update-organization.port';
import { IOrganizationRepositoryPort } from '@core/dashboard/organization/port/out/organization-repository.port';

export class UpdateOrganizationUseCase implements UpdateOrganizationPort {
  constructor(
    private readonly organizationRepository: IOrganizationRepositoryPort,
  ) {}

  async execute(params: IUpdateOrganizationCommand): Promise<IOrganizationEntity> {
    return this.organizationRepository.updateOrganization(params);
  }
}
