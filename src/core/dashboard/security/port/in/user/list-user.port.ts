import { UseCase } from "@base/use-case";
import { IUserEntity } from "@core/dashboard/security/domain/entity/user/user.entity";
import { IListUserQuery } from "@core/dashboard/security/domain/query/user/list-user.query";

export type ListUserPort = UseCase<IListUserQuery, IUserEntity[]>;