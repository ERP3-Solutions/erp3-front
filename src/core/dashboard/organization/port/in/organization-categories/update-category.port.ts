import { UseCase } from '@base/use-case';
import { IUpdateCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/update-category.command';
import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';

export type UpdateCategoryPort = UseCase<
  IUpdateCategoryCommand,
  IOrganizationCategoryEntity
>;
