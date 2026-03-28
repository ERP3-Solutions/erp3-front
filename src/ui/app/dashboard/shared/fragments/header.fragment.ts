import { Component, inject, OnInit } from '@angular/core';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { SidebarService } from '../services/sidebar.service';
import { BreadcrumbService } from '../services/bread-crumb.service';
import { BreadCrumbItem } from '../interfaces/bread-brumb-item.interface';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ui/shared/services/translate.service';
import { MenuService } from '@ui/shared/services/menu.service';
import { LangType } from '@ui/shared/types/lang.type';

@Component({
  selector: 'f-dashboard-header',
  imports: [
    // Modulos de angular
    RouterLink,
    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CAppButton,
    CAppIcon,

    // Componentes(standalone) externos
  ],
  templateUrl: './header.fragment.html',
})
export class FDashboardHeader implements OnInit {
  public menuService = inject(MenuService);
  public sidebarService = inject(SidebarService);
  public translateService = inject(TranslateService);

  private breadcrumbService = inject(BreadcrumbService);

  breadcrumbs: BreadCrumbItem[] = [];

  changeTranslate(lang: string) {
    if (lang as LangType) {
      console.log("change translate");
      
      this.translateService.setLang(lang as LangType);
    }
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumbs$.subscribe(bc => {
      this.breadcrumbs = bc;
    });
  }
}