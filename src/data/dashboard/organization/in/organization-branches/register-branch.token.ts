import { InjectionToken } from "@angular/core";
import { RegisterBranchPort } from "@core/dashboard/organization/port/in/organization-branches/register-branch.port";

export const REGISTER_BRANCH_TOKEN =
  new InjectionToken<RegisterBranchPort>(
    'REGISTER_BRANCH_TOKEN'
  );
