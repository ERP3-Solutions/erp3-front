import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SidebarStore {
  private _sidebarOpen = signal<boolean>(true);

  readonly sidebarOpen = this._sidebarOpen.asReadonly();

  public setSidebarOpen(open: boolean) {
    this._sidebarOpen.set(open);
  }
}