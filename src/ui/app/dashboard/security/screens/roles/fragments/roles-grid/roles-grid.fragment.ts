import { DatePipe, SlicePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { IRoleEntity } from '@core/roles/domain/entity/role.entity';
import { CAppButton } from '@ui/shared/components/button.component';
import { MenuService } from '@ui/shared/services/menu.service';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'f-security-roles-grid',
  imports: [
    // Modulos de angular
    DatePipe,
    SlicePipe,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CAppButton,
    
    // Componentes(standalone) externos
  ],
  templateUrl: './roles-grid.fragment.html',
})
export class FSecurityRolesGrid {
  public roles = input.required<IRoleEntity[]>();
  public menuService = inject(MenuService);
  public translateService = inject(TranslateService);

  editRole = output<IRoleEntity>();
  deleteRole = output<IRoleEntity>();
  createRole = output<void>();

  onEditRole(role: IRoleEntity) {
    this.editRole.emit(role);
  }

  onDeleteRole(role: IRoleEntity) {
    this.deleteRole.emit(role);
  }

  onCreateRole() {
    this.createRole.emit();
  }


  edit() { console.log('Editando...'); }
  delete() { console.log('Eliminando...'); }
}