import { IChangeStateSeriesCommand } from '../../domain/command/organization-series/change-state-series.command';
import { IRegisterSeriesCommand } from '../../domain/command/organization-series/register-series.command';
import { IOrganizationSerieEntity } from '../../domain/entity/organization-serie.entity';
import { IListSeriesQuery } from '../../domain/query/organization-series/list-series.query';

export interface IOrganizationSeriesRepositoryPort {
  registerSeries(
    command: IRegisterSeriesCommand,
  ): Promise<IOrganizationSerieEntity>;

  changeStateSeries(
    command: IChangeStateSeriesCommand,
  ): Promise<boolean>;

  listSeries(
    query: IListSeriesQuery,
  ): Promise<IOrganizationSerieEntity[]>;
}
