import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FDashboardSidebar } from './shared/fragments/sidebar.fragment';
import { SidebarService } from './shared/services/sidebar.service';
import { FDashboardHeader } from './shared/fragments/header.fragment';

@Component({
  selector: 'l-dashboard',
  imports: [
    // Modulos de angular
    CommonModule,
    RouterOutlet,

    // Modulos de capas externas
    FDashboardSidebar,
    FDashboardHeader,

    // Componentes(standalone) externos
  ],
  templateUrl: './dashboard.layout.html',
})
export class LDashboard {
  public sidebarService = inject(SidebarService);
}
