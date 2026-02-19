import { ComponentRef, Injectable, signal, Type, ViewContainerRef } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private rootOverlayRef = signal<ViewContainerRef | null>(null);

  setViewContainerRef(vcr: ViewContainerRef) {
    this.rootOverlayRef.set(vcr);
  }

  createComponent<C>(component: Type<C>): ComponentRef<C> | undefined {
    if (this.rootOverlayRef() === null) return undefined;
    return this.rootOverlayRef()?.createComponent(component);
  }
}