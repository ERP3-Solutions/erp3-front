import { UseCase } from '@base/use-case';
import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';
import { IGetCategoriesQuery } from '@core/dashboard/organization/domain/query/organization-categories/get-categories.query';

export type GetCategoriesPort = UseCase<
  IGetCategoriesQuery,
  IOrganizationCategoryEntity[]
>;
