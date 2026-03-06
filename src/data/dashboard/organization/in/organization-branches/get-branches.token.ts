import { InjectionToken } from "@angular/core";
import { GetBranchesPort } from "@core/dashboard/organization/port/in/organization-branches/get-branches.port";

export const GET_BRANCHES_TOKEN =
  new InjectionToken<GetBranchesPort>(
    'GET_BRANCHES_TOKEN'
  );
