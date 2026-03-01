import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CAppIcon } from '@ui/shared/components/icon.component';

@Component({
  selector: 'c-dashboard-sidebar-link-group',
  imports: [
    // Modulos de angular
    CommonModule,

    // Componentes(standalone) externos
    CAppIcon
  ],
  templateUrl: './sidebar-link-group.component.html',
})
export class CDashboardSidebarLinkGroup implements OnInit {
  icon = input.required<string>();
  iconModule = input.required<string>();
  label = input.required<string>();
  prefix = input.required<string>();

  public expanded = signal<boolean>(false);
  public router = inject(Router)

  ngOnInit() {
    this.checkIfActive()
  }

  checkIfActive() {
    const currentUrl = this.router.url;
    this.expanded.set(currentUrl.startsWith(this.prefix()));
  }
}
