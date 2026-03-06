import { inject, Injectable } from "@angular/core";
import { IChangeStateSeriesCommand } from "@core/dashboard/organization/domain/command/organization-series/change-state-series.command";
import { IRegisterSeriesCommand } from "@core/dashboard/organization/domain/command/organization-series/register-series.command";
import { IListSeriesQuery } from "@core/dashboard/organization/domain/query/organization-series/list-series.query";
import { ChangeStateSeriesPort } from "@core/dashboard/organization/port/in/organization-series/change-state-series.port";
import { ListSeriesPort } from "@core/dashboard/organization/port/in/organization-series/list-series.port";
import { RegisterSeriesPort } from "@core/dashboard/organization/port/in/organization-series/register-series.port";
import { CHANGE_STATE_SERIES_TOKEN } from "@data/dashboard/organization/in/organization-series/change-state-series.token";
import { LIST_SERIES_TOKEN } from "@data/dashboard/organization/in/organization-series/list-series.token";
import { REGISTER_SERIES_TOKEN } from "@data/dashboard/organization/in/organization-series/register-series.token";

@Injectable()
export class OrganizationSeriesFacade {
    private readonly changeStateOrganizationSeriesUseCase : ChangeStateSeriesPort = inject(CHANGE_STATE_SERIES_TOKEN);
    private readonly listOrganizationSeriesUseCase : ListSeriesPort = inject(LIST_SERIES_TOKEN);
    private readonly registerOrganizationSeriesUseCase : RegisterSeriesPort = inject(REGISTER_SERIES_TOKEN);

    changeState(command: IChangeStateSeriesCommand){
        return this.changeStateOrganizationSeriesUseCase.execute(command);
    }

    listSeries(query: IListSeriesQuery){
        return this.listOrganizationSeriesUseCase.execute(query);
    }

    registerSeries(command: IRegisterSeriesCommand){
        return this.registerOrganizationSeriesUseCase.execute(command);
    }
}