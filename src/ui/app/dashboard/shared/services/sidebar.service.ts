import { inject, Injectable } from "@angular/core";
import { SidebarStore } from "../stores/sidebar.store";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private readonly store: SidebarStore = inject(SidebarStore);

  public readonly isOpen = this.store.sidebarOpen;
  
  public toggleOpen() {
    this.store.setSidebarOpen(!this.isOpen());
  }
}