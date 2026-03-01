import { Component, inject } from '@angular/core';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'f-dashboard-header',
  imports: [
    // Modulos de angular
    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CAppButton,
    CAppIcon,

    // Componentes(standalone) externos
  ],
  templateUrl: './header.fragment.html',
})
export class FDashboardHeader {
  public sidebarService = inject(SidebarService);
}