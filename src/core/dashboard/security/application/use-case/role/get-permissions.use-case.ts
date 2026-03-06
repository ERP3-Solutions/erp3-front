import { IRolePermissionsEntity } from "@core/dashboard/security/domain/entity/role/role-permissions.entity";
import { IGetPermissionsQuery } from "@core/dashboard/security/domain/query/role/get-permissions.query";
import { GetPermissionsPort } from "@core/dashboard/security/port/in/role/get-permissions.port";
import { RoleRepositoryPort } from "@core/dashboard/security/port/out/role-repository.port";

export class GetPermissionsUseCase  implements GetPermissionsPort{
        public constructor(private roleRepository: RoleRepositoryPort){}
    
    async execute(params: IGetPermissionsQuery): Promise<IRolePermissionsEntity[]> {
        return this.roleRepository.getPermissions(params);
    }
}