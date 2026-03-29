import { Component, inject } from '@angular/core';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { SidebarService } from '../services/sidebar.service';
import { BreadcrumbService } from '../services/bread-crumb.service';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ui/shared/services/translate.service';
import { MenuService } from '@ui/shared/services/menu.service';
import { LangType } from '@ui/shared/types/lang.type';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@ui/shared/services/theme.service';

@Component({
  selector: 'f-dashboard-header',
  imports: [
    // Modulos de angular
    CommonModule,
    RouterLink,
    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CAppButton,
],
  templateUrl: './header.fragment.html',
})
export class FDashboardHeader {
  public menuService = inject(MenuService);
  public sidebarService = inject(SidebarService);
  public breadCrumbService = inject(BreadcrumbService);
  public translateService = inject(TranslateService);
  public themeService = inject(ThemeService);

  changeTranslate(lang: string) {
    if (lang as LangType) {
      this.translateService.setLang(lang as LangType);
      this.menuService.close();
    }
  }
}