import { Entity } from "@core/shared/domain/entity/base.entity";
import { ETypeUser } from "../../enum/type-user.enum";
import { IAccesibleBoxesEntity } from "./accesible-boxes-model.entity";
import { IAccesibleBranchesEntity } from "./accesible-branches-model.entity";
import { IUserRoleEntity } from "./user-role.entity";

export interface IUserEntity extends Entity {
    Name: string,
    email: string,
    lastName: string,
    isEnabled: boolean,
    userType: ETypeUser,
    organizationId: string,
    userRoles : IUserRoleEntity[],
    accesibleBoxes: IAccesibleBoxesEntity[],
    accesibleBranches: IAccesibleBranchesEntity[],
}