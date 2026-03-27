import { Component, Input, Output, EventEmitter, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CAppIcon } from './icon.component';

export interface MenuItem {
  label: string;
  icon?: string;
  iconModule?: string;
  disabled?: boolean;
  separator?: boolean;
  action?: () => void;
  data?: unknown;
}

@Component({
  selector: 'c-app-menu',
  standalone: true,
  imports: [CommonModule, CAppIcon],
  templateUrl: './menu.component.html',
})
export class CAppMenu {
  @Input() items: MenuItem[] = [];
  @Input() templateRef?: TemplateRef<unknown>;
  @Input() style: Record<string, string> = {};

  @Output() itemClick = new EventEmitter<MenuItem>();

  private closeFn?: () => void;

  onItemClick(item: MenuItem) {
    if (item.disabled) return;
    
    item.action?.();
    this.itemClick.emit(item);
    this.close();
  }

  setCloseFunction(fn: () => void) {
    this.closeFn = fn;
  }

  close() {
    this.closeFn?.();
  }
}