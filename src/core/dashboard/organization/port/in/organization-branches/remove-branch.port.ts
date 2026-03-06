import { UseCase } from '@base/use-case';
import { IRemoveBranchCommand } from '@core/dashboard/organization/domain/command/organization-branches/remove-branch.command';

export type RemoveBranchPort = UseCase<IRemoveBranchCommand, boolean>;
