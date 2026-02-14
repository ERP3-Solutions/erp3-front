import { effect, inject, Injectable } from "@angular/core";
import { ThemeStore } from "../stores/theme.store";
import { ThemeType } from "../types/theme.type";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly store: ThemeStore = inject(ThemeStore);

  constructor() {
    effect(() => {
      const theme = localStorage.getItem('ui.theme')
      if (theme !== null && (theme === 'light' || theme === 'dark')) {
        this.store.setTheme(theme as ThemeType);
        this._saveAndSetTheme();
      }
    })
  }

  public readonly theme = this.store.theme;
  public toggleTheme() {
    this.store.setTheme(this.theme() === 'light' ? 'dark' : 'light');
    this._saveAndSetTheme();
  }

  private _saveAndSetTheme() {
    localStorage.setItem('ui.theme', this.theme());
    if (this.theme() === 'light')
      document.documentElement.classList.remove('dark');
    else
      document.documentElement.classList.add('dark');

  }
}