import { Component, effect, inject, signal } from '@angular/core';
import { FSecurityRolesCards } from './fragments/roles-cards/roles-cards.fragment';
import { FSecurityRolesGrid } from './fragments/roles-grid/roles-grid.fragment';
import { ETypeView } from './enums/type-view.enum';
import { RolesService } from './services/roles.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { TranslateService } from '@ui/shared/services/translate.service';
import { CAppIcon } from '@ui/shared/components/icon.component';

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
    CAppButton,
    CAppIcon,
  ],
  templateUrl: './roles.screen.html',
  providers: [
    RolesService,
  ]
})
export class SSecurityRoles { 
  public typeView = signal<ETypeView>(ETypeView.GRID);
  public ETypeView = ETypeView;
  public rolesService = inject(RolesService);
  public translateService = inject(TranslateService);

  public readonly roles = this.rolesService.roles;

  constructor() {
    effect(() => {
      this.rolesService.obtainAllRoles();
    });
  }

}