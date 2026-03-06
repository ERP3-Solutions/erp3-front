import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';
import { IGetCategoriesQuery } from '@core/dashboard/organization/domain/query/organization-categories/get-categories.query';
import { GetCategoriesPort } from '@core/dashboard/organization/port/in/organization-categories/get-categories.port';
import { IOrganizationCategoriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-categories-repository.port';

export class GetCategoriesUseCase implements GetCategoriesPort {
  constructor(
    private readonly organizationCategoriesRepository: IOrganizationCategoriesRepositoryPort,
  ) {}

  async execute(params: IGetCategoriesQuery): Promise<IOrganizationCategoryEntity[]> {
    return this.organizationCategoriesRepository.getCategories(params);
  }
}
