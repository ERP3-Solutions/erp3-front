import { DatePipe, SlicePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { IRoleEntity } from '@core/roles/domain/entity/role.entity';
import { MenuItem } from '@ui/shared/components/menu.component';
import { MenuService } from '@ui/shared/services/menu.service';

@Component({
  selector: 'f-security-roles-grid',
  imports: [
    // Modulos de angular
    DatePipe,
    SlicePipe,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: './roles-grid.fragment.html',
})
export class FSecurityRolesGrid {
  public roles = input.required<IRoleEntity[]>();
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

  private menuService = inject(MenuService);

  menuItems: MenuItem[] = [
    { label: 'Editar', icon: 'edit', action: () => this.edit() },
    { label: 'Duplicar', icon: 'copy' },
    { label: 'Eliminar', icon: 'delete', action: () => this.delete() }
  ];

  openMenu(trigger: HTMLElement) {
    this.menuService.open(trigger, this.menuItems);
  }

  edit() { console.log('Editando...'); }
  delete() { console.log('Eliminando...'); }
}