import { Component, inject } from '@angular/core';
import { CDashboardSidebarGroup } from '../components/sidebar/sidebar-group.component';
import { CDashboardSidebarItem } from '../components/sidebar/sidebar-item.component';
import { SidebarService } from '../services/sidebar.service';

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

}