import { UseCase } from '@base/use-case';
import { IChangeStateSeriesCommand } from '@core/dashboard/organization/domain/command/organization-series/change-state-series.command';

export type ChangeStateSeriesPort = UseCase<
  IChangeStateSeriesCommand,
  boolean
>;
