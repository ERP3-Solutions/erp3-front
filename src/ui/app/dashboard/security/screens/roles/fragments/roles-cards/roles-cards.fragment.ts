import { DatePipe, SlicePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { IRoleEntity } from '@core/roles/domain/entity/role.entity';
import { CAppButton } from '@ui/shared/components/button.component';

@Component({
  selector: 'f-security-roles-cards',
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
  templateUrl: './roles-cards.fragment.html',
})
export class FSecurityRolesCards {
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
}