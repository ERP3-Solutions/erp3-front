import { Component, computed, effect, inject, signal } from '@angular/core';
import { CDashboardSidebarGroup } from '../components/sidebar/sidebar-group.component';
import { CDashboardSidebarItem } from '../components/sidebar/sidebar-item.component';
import { SidebarService } from '../services/sidebar.service';
import { SidebarItemsConstant } from '../constants/sidebar.constant';
import { EventType, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SidebarRouterItemInterface } from '../interfaces/sidebar-router.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'f-dashboard-sidebar-secondary',
  imports: [
    // Modulos de angular
    CommonModule,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CDashboardSidebarGroup,
    CDashboardSidebarItem,
  ],
  templateUrl: './sidebar-secondary.fragment.html',
})
export class FDashboardSidebarSecondary {
  public sidebarService = inject(SidebarService);

  private route = inject(Router);
  private events = toSignal(this.route.events);
  private url = signal<string>('');

  constructor() {
    effect(() => {
      const events = this.events();
      if (events?.type === EventType.NavigationEnd) 
        this.url.set(events.url.split('?')[0]);
    })
  }

  public sidebarConstant = computed(() => SidebarItemsConstant.reduce<SidebarRouterItemInterface | undefined>((prev, curr) => prev === undefined ? curr.items.find(i => this.url().startsWith(i.route)) : prev, undefined))
  public hasItems = computed(() => this.sidebarConstant() !== undefined && this.sidebarConstant()?.subItems !== undefined)
}