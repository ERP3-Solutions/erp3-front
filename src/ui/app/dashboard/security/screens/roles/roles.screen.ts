import { Component, effect, inject, signal } from '@angular/core';
import { FSecurityRolesCards } from './fragments/roles-cards/roles-cards.fragment';
import { FSecurityRolesGrid } from './fragments/roles-grid/roles-grid.fragment';
import { ETypeView } from './enums/type-view.enum';
import { RolesService } from './services/roles.service';

@Component({
  selector: 's-security-roles',
  imports: [
    // Modulos de angular
    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    FSecurityRolesCards,
    FSecurityRolesGrid,

    // Componentes(standalone) externos
  ],
  templateUrl: './roles.screen.html',
  providers: [
    RolesService,
  ]
})
export class SSecurityRoles { 
  public typeView = signal<ETypeView>(ETypeView.CARD);
  public ETypeView = ETypeView;
  public rolesService = inject(RolesService);

  constructor() {
    effect(() => {
      this.rolesService.obtainAllRoles();
    });
  }

}