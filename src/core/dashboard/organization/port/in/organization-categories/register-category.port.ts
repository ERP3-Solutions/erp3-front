import { UseCase } from '@base/use-case';
import { IRegisterCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/register-category.command';
import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';

export type RegisterCategoryPort = UseCase<
  IRegisterCategoryCommand,
  IOrganizationCategoryEntity
>;
