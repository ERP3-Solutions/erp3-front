import { IChangeStateSeriesCommand } from '@core/dashboard/organization/domain/command/organization-series/change-state-series.command';
import { ChangeStateSeriesPort } from '@core/dashboard/organization/port/in/organization-series/change-state-series.port';
import { IOrganizationSeriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-series-repository.port';

export class ChangeStateSeriesUseCase implements ChangeStateSeriesPort {
  constructor(
    private readonly organizationSeriesRepository: IOrganizationSeriesRepositoryPort,
  ) {}

  async execute(params: IChangeStateSeriesCommand): Promise<boolean> {
    return this.organizationSeriesRepository.changeStateSeries(params);
  }
}
