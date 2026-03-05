import { Injectable, signal, computed, Signal } from '@angular/core';
import { LangType } from '../types/lang.type';

@Injectable({
  providedIn: 'root'
})
export class TranslateStore {
  private _lang = signal<LangType>('en-US');
  private _translations = signal<Record<string, Record<LangType, unknown>>>({});

  readonly lang = this._lang.asReadonly();
  readonly translations = this._translations.asReadonly();

  setLang(lang: LangType): void {
    this._lang.set(lang);
  }

  getLang(): LangType {
    return this._lang();
  }

  setTranslation(namespace: string, lang: LangType, payload: unknown): void {
    this._translations.update((all) => ({
      ...all,
      [namespace]: {
        ...(all[namespace] ?? {}),
        [lang]: payload
      }
    }));
  }

  getTranslation(namespace: string, lang?: LangType): unknown | undefined {
    const l = lang ?? this._lang();
    return this._translations()[namespace]?.[l];
  }

  getAllNamespaces(): string[] {
    return Object.keys(this._translations());
  }

  translationSignal(namespace: string, lang?: LangType): Signal<unknown | null> {
    return computed(() => {
      const l = lang ?? this._lang();
      return this._translations()[namespace]?.[l] ?? null;
    });
  }

  clearAll(): void {
    this._translations.set({});
  }
}