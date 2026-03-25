import { ComponentRef, inject, Injectable, signal } from '@angular/core';
import { OverlayService } from './overlay.service';
import { CAppToast } from '../components/toast.component';
import { ToastPositionType } from '../types/position.type';

interface ToastOptions {
  text?: string;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
  position?: ToastPositionType;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private overlay = inject(OverlayService);

  private toasts = signal<ComponentRef<CAppToast>[]>([]);

  private maxToasts = 4;

  show(options: ToastOptions) {
    const componentRef = this.overlay.createComponent(CAppToast);
    if (!componentRef) return;

    const instance = componentRef.instance;

    instance.text = options.text ?? '';
    instance.type = options.type ?? 'info';
    instance.position = options.position ?? 'topRight';
    instance.duration = options.duration ?? 3000;

    this.toasts.update(list => [...list, componentRef]);

    if (this.toasts().length > this.maxToasts) {
      this.remove(this.toasts()[0]);
    }

    this.updatePositions(instance.position);

    setTimeout(() => {
      this.remove(componentRef);
    }, instance.duration);
  }

  private remove(ref: ComponentRef<CAppToast>) {
    ref.destroy();

    this.toasts.update(list => list.filter(t => t !== ref));

    const position = ref.instance.position;
    this.updatePositions(position);
  }

  private updatePositions(position: ToastPositionType) {
    const gap = 8;

    const filtered = this.toasts().filter(t => t.instance.position === position);

    filtered.forEach((toastRef, index) => {
      const style: Record<string, string> = {};

      if (position.startsWith('top')) {
        style['top'] = `${16 + index * (36 + gap)}px`;
      }

      if (position.startsWith('bottom')) {
        style['bottom'] = `${16 + index * (36 + gap)}px`;
      }

      if (position.includes('Left')) {
        style['left'] = '16px';
      }

      if (position.includes('Right')) {
        style['right'] = '16px';
      }

      if (position.includes('Center')) {
        style['left'] = '50%';
        style['transform'] = 'translateX(-50%)';
      }

      toastRef.instance.style = style;
    });
  }
}