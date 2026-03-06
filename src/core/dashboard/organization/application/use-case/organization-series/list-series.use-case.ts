import { IOrganizationSerieEntity } from '@core/dashboard/organization/domain/entity/organization-serie.entity';
import { IListSeriesQuery } from '@core/dashboard/organization/domain/query/organization-series/list-series.query';
import { ListSeriesPort } from '@core/dashboard/organization/port/in/organization-series/list-series.port';
import { IOrganizationSeriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-series-repository.port';

export class ListSeriesUseCase implements ListSeriesPort {
  constructor(
    private readonly organizationSeriesRepository: IOrganizationSeriesRepositoryPort,
  ) {}

  async execute(params: IListSeriesQuery): Promise<IOrganizationSerieEntity[]> {
    return this.organizationSeriesRepository.listSeries(params);
  }
}
