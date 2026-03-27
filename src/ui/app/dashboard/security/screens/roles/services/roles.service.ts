import { inject, Injectable, signal } from '@angular/core';
import { IRoleEntity } from '@core/roles/domain/entity/role.entity';
import { SecurityFacade } from '@ui/dashboard/security/facades/security.facade';

@Injectable()
export class RolesService {
  private readonly facade = inject(SecurityFacade);

  public roles = signal<IRoleEntity[]>([])

  public async obtainAllRoles() {
    const roles = await this.facade.obtainAllRoles();
    this.roles.set(roles);
  }
}