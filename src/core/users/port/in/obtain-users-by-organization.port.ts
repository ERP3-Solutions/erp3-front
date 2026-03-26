import { UseCase } from "@base/use-case";
import { IUserEntity } from "@core/users/domain/entity/user.entity";

export type ObtainUsersByOrganizationPort = UseCase<void, IUserEntity[]>