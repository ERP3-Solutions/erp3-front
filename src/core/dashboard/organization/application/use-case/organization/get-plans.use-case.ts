import { IPlanListItemDto } from '@core/dashboard/organization/domain/dto/plan-list-item.dto';
import { IGetPlansQuery } from '@core/dashboard/organization/domain/query/organization/get-plans.query';
import { GetPlansPort } from '@core/dashboard/organization/port/in/organization/get-plans.port';
import { IOrganizationRepositoryPort } from '@core/dashboard/organization/port/out/organization-repository.port';

export class GetPlansUseCase implements GetPlansPort {
  constructor(
    private readonly organizationRepository: IOrganizationRepositoryPort,
  ) {}

  async execute(params: IGetPlansQuery): Promise<IPlanListItemDto[]> {
    return this.organizationRepository.getPlans(params);
  }
}
