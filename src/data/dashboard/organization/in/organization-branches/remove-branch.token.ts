import { InjectionToken } from "@angular/core";
import { RemoveBranchPort } from "@core/dashboard/organization/port/in/organization-branches/remove-branch.port";

export const REMOVE_BRANCH_TOKEN =
  new InjectionToken<RemoveBranchPort>(
    'REMOVE_BRANCH_TOKEN'
  );
