import { IChangeStateCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/change-state-category.command';
import { ChangeStateCategoryPort } from '@core/dashboard/organization/port/in/organization-categories/change-state-category.port';
import { IOrganizationCategoriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-categories-repository.port';

export class ChangeStateCategoryUseCase implements ChangeStateCategoryPort {
  constructor(
    private readonly organizationCategoriesRepository: IOrganizationCategoriesRepositoryPort,
  ) {}

  async execute(params: IChangeStateCategoryCommand): Promise<boolean> {
    return this.organizationCategoriesRepository.changeStateCategory(params);
  }
}
