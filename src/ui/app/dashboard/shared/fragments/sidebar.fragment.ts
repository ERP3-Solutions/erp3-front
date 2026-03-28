import { Component, inject } from '@angular/core';
import { CDashboardSidebarGroup } from '../components/sidebar/sidebar-group.component';
import { CDashboardSidebarItem } from '../components/sidebar/sidebar-item.component';
import { SidebarService } from '../services/sidebar.service';
import { SidebarItemsConstant } from '../constants/sidebar.constant';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'f-dashboard-sidebar',
  imports: [
    // Modulos de angular
    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CDashboardSidebarGroup,
    CDashboardSidebarItem,

    // Componentes(standalone) externos
  ],
  templateUrl: './sidebar.fragment.html',
})
export class FDashboardSidebar {
  public sidebarService = inject(SidebarService);
  public translateService = inject(TranslateService);
  public sidebarConstant = SidebarItemsConstant;
}