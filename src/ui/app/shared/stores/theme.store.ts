import { Injectable, signal } from "@angular/core";
import { ThemeType } from "../types/theme.type";

@Injectable({
  providedIn: 'root'
})
export class ThemeStore {
  private _theme = signal<ThemeType>('light');

  readonly theme = this._theme.asReadonly();

  public setTheme(theme: ThemeType) {
    this._theme.set(theme);
  }
}