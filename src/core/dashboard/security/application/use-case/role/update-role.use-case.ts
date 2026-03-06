import { IUpdateRoleCommand } from "@core/dashboard/security/domain/command/role/update-role.command";
import { IRoleEntity } from "@core/dashboard/security/domain/entity/role/role.entity";
import { UpdateRolePort } from "@core/dashboard/security/port/in/role/update-role.port";

export class UpdateRoleUseCase  implements UpdateRolePort{
    
    execute(params: IUpdateRoleCommand): Promise<IRoleEntity> {
        throw new Error("Method not implemented.");
    }
}