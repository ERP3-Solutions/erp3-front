import { Injectable, inject, TemplateRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { OverlayService } from './overlay.service';
import { CAppMenu } from '../components/menu.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private overlayService = inject(OverlayService);
  private currentMenuRef: ComponentRef<CAppMenu> | null = null;

  open(
    triggerElement: HTMLElement,
    template?: TemplateRef<unknown>
  ) {
    if (this.currentMenuRef !== null) return;

    const menuRef = this.overlayService.createComponent(CAppMenu);
    if (!menuRef) return;

    this.currentMenuRef = menuRef;

    const menuInstance = menuRef;
    menuInstance.instance.templateRef = template;
    menuInstance.instance.instante = menuInstance;

    const rect = triggerElement.getBoundingClientRect();

    const menuStyle: Record<string, string> = {
      position: 'fixed',
      top: `${rect.bottom + 8}px`,
      right: `${window.innerWidth - rect.right}px`,
      minWidth: `${rect.width}px`
    };

    menuInstance.instance.style = menuStyle;

    const closeMenu = () => {
      menuInstance.instance.close();
      this.currentMenuRef = null;
      document.removeEventListener('click', closeOnOutsideClick);
    };

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.location.nativeElement.contains(event.target as Node)) {
        closeMenu();
      }
    };

    setTimeout(() => {
      document.addEventListener('click', closeOnOutsideClick);
    }, 150);
  }
}