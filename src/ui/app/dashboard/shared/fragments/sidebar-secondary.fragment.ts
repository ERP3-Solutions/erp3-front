import { Component, inject } from '@angular/core';
import { CDashboardSidebarGroup } from '../components/sidebar/sidebar-group.component';
import { CDashboardSidebarItem } from '../components/sidebar/sidebar-item.component';
import { SidebarService } from '../services/sidebar.service';
import { SidebarItemsConstant } from '../constants/sidebar.constant';

@Component({
  selector: 'f-dashboard-sidebar-secondary',
  imports: [
    // Modulos de angular
    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CDashboardSidebarGroup,
    CDashboardSidebarItem,

    // Componentes(standalone) externos
  ],
  templateUrl: './sidebar-secondary.fragment.html',
})
export class FDashboardSidebarSecondary {
  public sidebarService = inject(SidebarService);
  public sidebarConstant = SidebarItemsConstant;
}