import { IUserEntity } from "@core/users/domain/entity/user.entity";

export interface UserRepositoryPort {
  obtainUsersByOrganization(): Promise<IUserEntity[]>;
}