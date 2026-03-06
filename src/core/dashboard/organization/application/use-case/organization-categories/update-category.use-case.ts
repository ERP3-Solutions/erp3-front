import { IUpdateCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/update-category.command';
import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';
import { UpdateCategoryPort } from '@core/dashboard/organization/port/in/organization-categories/update-category.port';
import { IOrganizationCategoriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-categories-repository.port';

export class UpdateCategoryUseCase implements UpdateCategoryPort {
  constructor(
    private readonly organizationCategoriesRepository: IOrganizationCategoriesRepositoryPort,
  ) {}

  async execute(params: IUpdateCategoryCommand): Promise<IOrganizationCategoryEntity> {
    return this.organizationCategoriesRepository.updateCategory(params);
  }
}
