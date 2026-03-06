import { UseCase } from '@base/use-case';
import { IChangeStateBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/change-state-branch.command';

export type ChangeStateBranchPort = UseCase<
  IChangeStateBranchCommand,
  boolean
>;
