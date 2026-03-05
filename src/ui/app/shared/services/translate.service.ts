import { Injectable, inject, computed, Signal } from '@angular/core';
import { TranslateStore } from '../stores/translate.store';
import { LangType } from '../types/lang.type';
import { isDevMode } from '@angular/core';

const LS_KEY_LANG = 'ui.lang';
const LS_KEY_TRANSLATIONS = 'ui.translations';
const DEFAULT_LANG: LangType = 'es-ES';
const FALLBACK_LANG: LangType = 'es-ES';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private store = inject(TranslateStore);
  readonly langSignal: Signal<LangType> = computed(() => this.store.getLang());

  constructor() {
    const savedLang = this._readLangFromStorage();
    if (savedLang) this.store.setLang(savedLang);

    if (!isDevMode()) {
      this._initRestore();
    }
  }

  private async _initRestore(): Promise<void> {
    await this.restorePersistedTranslations().catch(() => { /* ignore */ });
  }

  /**
   * Load a translation JSON for a namespace and language.
   * namespace: path from ui root to the module folder, e.g. 'app/auth' or 'dashboard/finance'
   * expects file at: ui/<namespace>/translation/<lang>.translation.json
   * This function also caches the result in the store and optionally persists to localStorage.
   */
  async load(namespace: string, lang?: LangType): Promise<void> {
    const targetLang = lang ?? this.store.getLang() ?? DEFAULT_LANG;
    if (this.store.getTranslation(namespace, targetLang)) return;

    try {
      const url = this._assetsUrlFor(namespace, targetLang);
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        this.store.setTranslation(namespace, targetLang, data);
        this._persistTranslationsToStorage();
        return;
      }
    } catch { /* empty */ }

    if (targetLang !== FALLBACK_LANG) {
      await this.load(namespace, FALLBACK_LANG).catch(() => { /* empty */ });
    }
  }

  /**
   * Synchronously translate a key.
   * fullPath format: "<namespace>.<path.to.key>", e.g. "app/auth.screens.register.title"
   * Supports simple interpolation with {{name}} using `params`.
   */
  t(fullPath: string, params?: Record<string, string>, fallback?: string): string {
    if (!fullPath) return String(fallback ?? '');

    const [namespace, ...rest] = fullPath.split('.');
    if (!namespace || rest.length === 0) return fallback ?? fullPath;

    const keyPath = rest.join('.');
    const lang = this.store.getLang();

    let translations = this.store.getTranslation(namespace, lang);

    if (!translations) translations = this.store.getTranslation(namespace, FALLBACK_LANG);

    if (!translations) return fallback ?? fullPath;

    const value = keyPath.split('.').reduce((obj: unknown, k: string) => (obj as Record<string, unknown>)?.[k], translations);

    const str = value == null ? (fallback ?? fullPath) : String(value);

    return params ? this._interpolate(str, params) : str;
  }

  /**
   * Return a computed Signal for reactive template usage.
   * Example: {{ translateService.tSignal('app/auth.screens.register.title')() }}
   */
  tSignal(fullPath: string, params?: Record<string, string>, fallback?: string): Signal<string> {
    return computed(() => this.t(fullPath, params, fallback));
  }

  /**
   * Access raw translation object signal for a namespace (useful for forms)
   */
  namespaceSignal(namespace: string, lang?: LangType): Signal<unknown | null> {
    return this.store.translationSignal(namespace, lang);
  }

  /**
   * Change current app language. Service persists the new language and attempts to reload
   * already cached namespaces in background.
   */
  setLang(lang: LangType): void {
    const prev = this.store.getLang();
    if (prev === lang) return;

    this.store.setLang(lang);
    this._writeLangToStorage(lang);

    const namespaces = this.store.getAllNamespaces();
    for (const ns of namespaces) {
      this.load(ns, lang).catch(() => { /* ignore */ });
    }
  }

  private _interpolate(template: string, params: Record<string, string>): string {
    return template.replace(/\{\{\s*([^}]+)\s*\}\}/g, (_m, p1) => {
      const key = p1.trim();
      return params[key] ?? '';
    });
  }

  private _assetsUrlFor(namespace: string, lang: LangType): string {
    return `/ui/assets/i18n/${namespace}/${lang}.translation.json`;
  }

  private _readLangFromStorage(): LangType | null {
    try {
      const raw = localStorage.getItem(LS_KEY_LANG);
      if (!raw) return null;
      return raw as LangType;
    } catch {
      return null;
    }
  }

  private _writeLangToStorage(lang: LangType): void {
    try {
      localStorage.setItem(LS_KEY_LANG, lang);
    } catch { /* empty */ }
  }

  private _persistTranslationsToStorage(): void {
    try {
      const all = this.store.translations() ?? {};
      localStorage.setItem(LS_KEY_TRANSLATIONS, JSON.stringify(all));
    } catch { /* empty */ }
  }

  async restorePersistedTranslations(): Promise<void> {
    try {
      const raw = localStorage.getItem(LS_KEY_TRANSLATIONS);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Record<string, Record<LangType, unknown>>;
      if (!parsed || typeof parsed !== 'object') return;

      for (const namespace of Object.keys(parsed)) {
        for (const lang of Object.keys(parsed[namespace]) as LangType[]) {
          const payload = parsed[namespace][lang];
          if (payload) this.store.setTranslation(namespace, lang, payload);
        }
      }
    } catch { /* empty */ }
  }
}