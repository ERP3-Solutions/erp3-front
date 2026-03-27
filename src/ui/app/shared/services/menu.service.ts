import { Injectable, inject, TemplateRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { OverlayService } from './overlay.service';
import { CAppMenu, MenuItem } from '../components/menu.component';

@Injectable({ providedIn: 'root' })
export class MenuService {

  private overlayService = inject(OverlayService);
  private currentMenuRef: ComponentRef<CAppMenu> | null = null;

  open(
    triggerElement: HTMLElement,
    items: MenuItem[] = [],
    template?: TemplateRef<unknown>
  ) {
    // Cerrar menú anterior si existe
    this.close();
    console.log(triggerElement, items);
    
    const menuRef = this.overlayService.createComponent(CAppMenu);
    if (!menuRef) return;

    this.currentMenuRef = menuRef;

    const menuInstance = menuRef.instance;
    menuInstance.items = items;
    menuInstance.templateRef = template;

    // Posicionar el menú cerca del botón trigger
    const rect = triggerElement.getBoundingClientRect();
    const menuStyle: Record<string, string> = {
      position: 'fixed',
      top: `${rect.bottom + 8}px`,
      left: `${rect.left}px`,
      minWidth: `${Math.max(rect.width, 180)}px`
    };

    menuInstance.style = menuStyle;

    // Función para cerrar
    const closeMenu = () => {
      menuRef.destroy();
      this.currentMenuRef = null;
      document.removeEventListener('click', closeOnOutsideClick);
    };

    menuInstance.setCloseFunction(closeMenu);

    // Cerrar al hacer clic fuera
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.location.nativeElement.contains(event.target as Node)) {
        closeMenu();
      }
    };

    setTimeout(() => {
      document.addEventListener('click', closeOnOutsideClick);
    }, 10);
  }

  close() {
    if (this.currentMenuRef) {
      this.currentMenuRef.destroy();
      this.currentMenuRef = null;
    }
  }
}