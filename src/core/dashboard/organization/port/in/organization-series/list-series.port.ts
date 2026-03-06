import { UseCase } from '@base/use-case';
import { IOrganizationSerieEntity } from '@core/dashboard/organization/domain/entity/organization-serie.entity';
import { IListSeriesQuery } from '@core/dashboard/organization/domain/query/organization-series/list-series.query';

export type ListSeriesPort = UseCase<
  IListSeriesQuery,
  IOrganizationSerieEntity[]
>;
