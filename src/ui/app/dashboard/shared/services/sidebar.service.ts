import { effect, inject, Injectable } from "@angular/core";
import { SidebarStore } from "../stores/sidebar.store";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private readonly store: SidebarStore = inject(SidebarStore);

  constructor() {
    effect(() => {
      const sidebarOpen = localStorage.getItem('ui.sidebar-open')
      if (sidebarOpen !== null) {
        this.store.setSidebarOpen(sidebarOpen === '1');
        this._saveAndSetSidebar();
      }
    })
  }

  public readonly isOpen = this.store.sidebarOpen;

  public toggleOpen() {
    this.store.setSidebarOpen(!this.isOpen());
    this._saveAndSetSidebar();
  }

  private _saveAndSetSidebar() {
    localStorage.setItem('ui.sidebar-open', this.isOpen() ? '1' : '0');
  }
}