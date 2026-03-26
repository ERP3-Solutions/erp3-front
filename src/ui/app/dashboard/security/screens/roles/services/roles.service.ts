import { inject, Injectable } from '@angular/core';
import { SecurityFacade } from '@ui/dashboard/security/facades/security.facade';

@Injectable()
export class RolesService {
  private readonly facade = inject(SecurityFacade);

  public async obtainAllRoles() {
    const roles = await this.facade.obtainAllRoles();
    console.log(roles);
  }
}