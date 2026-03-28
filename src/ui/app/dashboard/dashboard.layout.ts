import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FDashboardSidebar } from './shared/fragments/sidebar.fragment';
import { SidebarService } from './shared/services/sidebar.service';
import { FDashboardHeader } from './shared/fragments/header.fragment';
import { FDashboardSidebarSecondary } from './shared/fragments/sidebar-secondary.fragment';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'l-dashboard',
  imports: [
    // Modulos de angular
    CommonModule,
    RouterOutlet,

    // Modulos de capas externas
    FDashboardSidebar,
    FDashboardSidebarSecondary,
    FDashboardHeader,

    // Componentes(standalone) externos
  ],
  templateUrl: './dashboard.layout.html',
})
export class LDashboard {
  public sidebarService = inject(SidebarService);
  private translate = inject(TranslateService);

  constructor() {
    effect(async () => {
      await this.translate.load('dashboard');
    })
  }
}
