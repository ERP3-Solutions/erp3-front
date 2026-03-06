import { IRegisterSeriesCommand } from '@core/dashboard/organization/domain/command/organization-series/register-series.command';
import { IOrganizationSerieEntity } from '@core/dashboard/organization/domain/entity/organization-serie.entity';
import { RegisterSeriesPort } from '@core/dashboard/organization/port/in/organization-series/register-series.port';
import { IOrganizationSeriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-series-repository.port';

export class RegisterSeriesUseCase implements RegisterSeriesPort {
  constructor(
    private readonly organizationSeriesRepository: IOrganizationSeriesRepositoryPort,
  ) {}

  async execute(params: IRegisterSeriesCommand): Promise<IOrganizationSerieEntity> {
    return this.organizationSeriesRepository.registerSeries(params);
  }
}
