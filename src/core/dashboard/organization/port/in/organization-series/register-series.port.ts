import { UseCase } from '@base/use-case';
import { IRegisterSeriesCommand } from '@core/dashboard/organization/domain/command/organization-series/register-series.command';
import { IOrganizationSerieEntity } from '@core/dashboard/organization/domain/entity/organization-serie.entity';

export type RegisterSeriesPort = UseCase<
  IRegisterSeriesCommand,
  IOrganizationSerieEntity
>;
