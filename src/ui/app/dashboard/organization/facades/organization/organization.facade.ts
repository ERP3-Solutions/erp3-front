import { inject, Injectable } from "@angular/core";
import { IUpdateOrganizationCommand } from "@core/dashboard/organization/domain/command/organization/update-organization.command";
import { IGetInformationByRucQuery } from "@core/dashboard/organization/domain/query/organization/get-information-by-ruc.query";
import { IGetOrganizationQuery } from "@core/dashboard/organization/domain/query/organization/get-organization.query";
import { IGetPlansQuery } from "@core/dashboard/organization/domain/query/organization/get-plans.query";
import { GetInformationByRucPort } from "@core/dashboard/organization/port/in/organization/get-information-by-ruc.port";
import { GetOrganizationPort } from "@core/dashboard/organization/port/in/organization/get-organization.port";
import { GetPlansPort } from "@core/dashboard/organization/port/in/organization/get-plans.port";
import { UpdateOrganizationPort } from "@core/dashboard/organization/port/in/organization/update-organization.port";
import { GET_INFORMATION_BY_RUC_TOKEN } from "@data/dashboard/organization/in/organization/get-information-by-ruc.token";
import { GET_ORGANIZATION_TOKEN } from "@data/dashboard/organization/in/organization/get-organization.token";
import { GET_PLANS_TOKEN } from "@data/dashboard/organization/in/organization/get-plans.token";
import { UPDATE_ORGANIZATION_TOKEN } from "@data/dashboard/organization/in/organization/update-organization.token";

@Injectable()
export class OrganizationFacade {
    private readonly getInformationByRucUseCase: GetInformationByRucPort = inject(GET_INFORMATION_BY_RUC_TOKEN);
    private readonly getOrganizationUseCase: GetOrganizationPort = inject(GET_ORGANIZATION_TOKEN);
    private readonly getPlansUseCase: GetPlansPort = inject(GET_PLANS_TOKEN);
    private readonly updateOrganizationUseCase: UpdateOrganizationPort = inject(UPDATE_ORGANIZATION_TOKEN);

    getInformationByRuc(query: IGetInformationByRucQuery){
        return this.getInformationByRucUseCase.execute(query);
    }

    getOrganization(query: IGetOrganizationQuery){
        return this.getOrganizationUseCase.execute(query);
    }

    getPlans(query: IGetPlansQuery){
        return this.getPlansUseCase.execute(query);
    }

    updateOrganization(command: IUpdateOrganizationCommand){
        return this.updateOrganizationUseCase.execute(command);
    }
}