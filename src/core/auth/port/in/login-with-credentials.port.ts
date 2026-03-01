import { UseCase } from "@base/use-case";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";

export type LoginWithCredentialsPort = UseCase<ICredentialsCommand, void>