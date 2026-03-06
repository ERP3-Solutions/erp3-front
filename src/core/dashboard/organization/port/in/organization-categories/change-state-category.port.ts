import { UseCase } from '@base/use-case';
import { IChangeStateCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/change-state-category.command';

export type ChangeStateCategoryPort = UseCase<
  IChangeStateCategoryCommand,
  boolean
>;
