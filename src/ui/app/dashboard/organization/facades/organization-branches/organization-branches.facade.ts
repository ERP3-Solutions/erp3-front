import { inject, Injectable } from "@angular/core";
import { IChangeStateBranchCommand } from "@core/dashboard/organization/domain/command/organization-branches/change-state-branch.command";
import { IRegisterBranchCommand } from "@core/dashboard/organization/domain/command/organization-branches/register-branch.command";
import { IRemoveBranchCommand } from "@core/dashboard/organization/domain/command/organization-branches/remove-branch.command";
import { IUpdateBranchCommand } from "@core/dashboard/organization/domain/command/organization-branches/update-branch.command";
import { IGetBranchesQuery } from "@core/dashboard/organization/domain/query/organization-branches/get-branches.query";
import { ChangeStateBranchPort } from "@core/dashboard/organization/port/in/organization-branches/change-state-branch.port";
import { GetBranchesPort } from "@core/dashboard/organization/port/in/organization-branches/get-branches.port";
import { RegisterBranchPort } from "@core/dashboard/organization/port/in/organization-branches/register-branch.port";
import { RemoveBranchPort } from "@core/dashboard/organization/port/in/organization-branches/remove-branch.port";
import { UpdateBranchPort } from "@core/dashboard/organization/port/in/organization-branches/update-branch.port";
import { CHANGE_STATE_BRANCH_TOKEN } from "@data/dashboard/organization/in/organization-branches/change-state-branch.token";
import { GET_BRANCHES_TOKEN } from "@data/dashboard/organization/in/organization-branches/get-branches.token";
import { REGISTER_BRANCH_TOKEN } from "@data/dashboard/organization/in/organization-branches/register-branch.token";
import { REMOVE_BRANCH_TOKEN } from "@data/dashboard/organization/in/organization-branches/remove-branch.token";
import { UPDATE_BRANCH_TOKEN } from "@data/dashboard/organization/in/organization-branches/update-branch.token";

@Injectable()
export class OrganizationBranchesFacade {
    private readonly changeStateOrganizationBranchUseCase : ChangeStateBranchPort = inject(CHANGE_STATE_BRANCH_TOKEN);
    private readonly getBranchesOrganizationUseCase : GetBranchesPort = inject(GET_BRANCHES_TOKEN);
    private readonly updateBranchesOrganizationUseCase : UpdateBranchPort = inject(UPDATE_BRANCH_TOKEN);
    private readonly registerOrganizationBranchUseCase : RegisterBranchPort = inject(REGISTER_BRANCH_TOKEN);
    private readonly removeOrganizationBranchUseCase : RemoveBranchPort = inject(REMOVE_BRANCH_TOKEN);

    changeStateBranch(command: IChangeStateBranchCommand){
        return this.changeStateOrganizationBranchUseCase.execute(command);
    }

    getBranches(query: IGetBranchesQuery){
        return this.getBranchesOrganizationUseCase.execute(query);
    }

    updateBranch(command: IUpdateBranchCommand){
        return this.updateBranchesOrganizationUseCase.execute(command);
    }

    registerBranch(command: IRegisterBranchCommand){
        return this.registerOrganizationBranchUseCase.execute(command);
    }

    removeBranch(command: IRemoveBranchCommand){
        return this.removeOrganizationBranchUseCase.execute(command);
    }
}
