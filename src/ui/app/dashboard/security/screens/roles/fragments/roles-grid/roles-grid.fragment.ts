import { DatePipe, SlicePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { IRoleEntity } from '@core/roles/domain/entity/role.entity';

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
}