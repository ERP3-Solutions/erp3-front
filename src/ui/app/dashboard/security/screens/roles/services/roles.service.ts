import { inject, Injectable, signal } from '@angular/core';
import { IRoleEntity } from '@core/roles/domain/entity/role.entity';
import { SecurityFacade } from '@ui/dashboard/security/facades/security.facade';

@Injectable()
export class RolesService {
  private readonly facade = inject(SecurityFacade);

  public loadingRoles = signal<boolean>(false);
  public roles = signal<IRoleEntity[]>([])

  public async obtainAllRoles() {
    this.loadingRoles.set(true);
    try {
      const roles = await this.facade.obtainAllRoles();
      this.roles.set(roles);
    } catch(e) {
      console.log(e);
    }
    this.loadingRoles.set(false);
  }
}