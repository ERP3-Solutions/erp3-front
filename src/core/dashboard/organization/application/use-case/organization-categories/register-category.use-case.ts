import { IRegisterCategoryCommand } from '@core/dashboard/organization/domain/command/organization-categories/register-category.command';
import { IOrganizationCategoryEntity } from '@core/dashboard/organization/domain/entity/organization-category.entity';
import { RegisterCategoryPort } from '@core/dashboard/organization/port/in/organization-categories/register-category.port';
import { IOrganizationCategoriesRepositoryPort } from '@core/dashboard/organization/port/out/organization-categories-repository.port';

export class RegisterCategoryUseCase implements RegisterCategoryPort {
  constructor(
    private readonly organizationCategoriesRepository: IOrganizationCategoriesRepositoryPort,
  ) {}

  async execute(params: IRegisterCategoryCommand): Promise<IOrganizationCategoryEntity> {
    return this.organizationCategoriesRepository.registerCategory(params);
  }
}
