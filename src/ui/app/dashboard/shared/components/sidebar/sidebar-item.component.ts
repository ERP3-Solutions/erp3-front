import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, Params, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { DAppTooltip } from '@ui/shared/directives/tooltip.directive';

@Component({
  selector: 'c-dashboard-sidebar-item',
  imports: [
    // Modulos de angular
    CommonModule,
    RouterLink,
    RouterLinkActive,

    // Componentes(standalone) externos
    CAppIcon,
    DAppTooltip
],
  templateUrl: './sidebar-item.component.html',
})
export class CDashboardSidebarItem {
  icon = input<string>();
  iconModule = input<string>();
  open = input<boolean>(true);
  label = input.required<string>();
  routerLink = input.required<string>();
  queryParams = input<Params | null>(null);
  routerLinkActiveOptions = input<{ exact: boolean } | IsActiveMatchOptions>({
    exact: true,
    queryParams: 'ignored',
    matrixParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  });
  isDrawer = input<boolean>(false);
  tabLink = input<string>('')

  public router = inject(Router);
  public route = inject(ActivatedRoute);

  toTabLink() {
    const mapQuery = this.route.snapshot.queryParams
    this.router.navigate([], {
      queryParams: {
        ...mapQuery,
        drawerTab: this.tabLink
      },
      queryParamsHandling: 'merge'
    })
  }

  isActive() {
    const { drawerTab } = this.route.snapshot.queryParams
    if (drawerTab) {
      return this.tabLink === drawerTab
    }
    return false
  }
}
