import { IChangeStateCategoryCommand } from '../../domain/command/organization-categories/change-state-category.command';
import { IRegisterCategoryCommand } from '../../domain/command/organization-categories/register-category.command';
import { IUpdateCategoryCommand } from '../../domain/command/organization-categories/update-category.command';
import { IOrganizationCategoryEntity } from '../../domain/entity/organization-category.entity';
import { IGetCategoriesQuery } from '../../domain/query/organization-categories/get-categories.query';

export interface IOrganizationCategoriesRepositoryPort {
  registerCategory(
    command: IRegisterCategoryCommand,
  ): Promise<IOrganizationCategoryEntity>;

  updateCategory(
    command: IUpdateCategoryCommand,
  ): Promise<IOrganizationCategoryEntity>;

  changeStateCategory(
    command: IChangeStateCategoryCommand,
  ): Promise<boolean>;

  getCategories(
    query: IGetCategoriesQuery,
  ): Promise<IOrganizationCategoryEntity[]>;
}
