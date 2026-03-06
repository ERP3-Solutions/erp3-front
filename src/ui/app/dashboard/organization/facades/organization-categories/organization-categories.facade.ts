import { inject, Injectable } from "@angular/core";
import { IChangeStateCategoryCommand } from "@core/dashboard/organization/domain/command/organization-categories/change-state-category.command";
import { IRegisterCategoryCommand } from "@core/dashboard/organization/domain/command/organization-categories/register-category.command";
import { IUpdateCategoryCommand } from "@core/dashboard/organization/domain/command/organization-categories/update-category.command";
import { IGetCategoriesQuery } from "@core/dashboard/organization/domain/query/organization-categories/get-categories.query";
import { ChangeStateCategoryPort } from "@core/dashboard/organization/port/in/organization-categories/change-state-category.port";
import { GetCategoriesPort } from "@core/dashboard/organization/port/in/organization-categories/get-categories.port";
import { RegisterCategoryPort } from "@core/dashboard/organization/port/in/organization-categories/register-category.port";
import { UpdateCategoryPort } from "@core/dashboard/organization/port/in/organization-categories/update-category.port";
import { CHANGE_STATE_CATEGORY_TOKEN } from "@data/dashboard/organization/in/organization-categories/change-state-category.token";
import { GET_CATEGORIES_TOKEN } from "@data/dashboard/organization/in/organization-categories/get-categories.token";
import { REGISTER_CATEGORY_TOKEN } from "@data/dashboard/organization/in/organization-categories/register-category.token";
import { UPDATE_CATEGORY_TOKEN } from "@data/dashboard/organization/in/organization-categories/update-category.token";

@Injectable()
export class OrganizationCategoriesFacade{
    private readonly registerOrganizationCategoryUseCase : RegisterCategoryPort = inject(REGISTER_CATEGORY_TOKEN);
    private readonly getOrganizationCategoriesUseCase : GetCategoriesPort = inject(GET_CATEGORIES_TOKEN);
    private readonly updateOrganizationCategoryUseCase : UpdateCategoryPort = inject(UPDATE_CATEGORY_TOKEN);
    private readonly changeStateOrganizationCategoryUseCase : ChangeStateCategoryPort = inject(CHANGE_STATE_CATEGORY_TOKEN);

    registerOrganizationCategory(command: IRegisterCategoryCommand){
        return this.registerOrganizationCategoryUseCase.execute(command);
    }
    
    getOrganizationCategories(query: IGetCategoriesQuery){
        return this.getOrganizationCategoriesUseCase.execute(query);
    }

    updateOrganizationCategory(command: IUpdateCategoryCommand){
        return this.updateOrganizationCategoryUseCase.execute(command);
    }
    
    changeStateOrganizationCategory(command: IChangeStateCategoryCommand){
        return this.changeStateOrganizationCategoryUseCase.execute(command);
    }
}