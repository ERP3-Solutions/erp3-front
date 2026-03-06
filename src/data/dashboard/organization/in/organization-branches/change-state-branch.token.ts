import { InjectionToken } from "@angular/core";
import { ChangeStateBranchPort } from "@core/dashboard/organization/port/in/organization-branches/change-state-branch.port";

export const CHANGE_STATE_BRANCH_TOKEN =
  new InjectionToken<ChangeStateBranchPort>(
    'CHANGE_STATE_BRANCH_TOKEN'
  );
