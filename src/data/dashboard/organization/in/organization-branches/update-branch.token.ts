import { InjectionToken } from "@angular/core";
import { UpdateBranchPort } from "@core/dashboard/organization/port/in/organization-branches/update-branch.port";

export const UPDATE_BRANCH_TOKEN =
  new InjectionToken<UpdateBranchPort>(
    'UPDATE_BRANCH_TOKEN'
  );
