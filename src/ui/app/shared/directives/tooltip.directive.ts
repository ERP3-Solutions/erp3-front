import {
  Directive,
  ElementRef,
  inject,
  input,
  signal,
  TemplateRef,
  EmbeddedViewRef,
  ComponentRef
} from '@angular/core';

import { OverlayService } from '../services/overlay.service';
import { CAppTooltip } from '../components/tooltip.component';

@Directive({
  selector: '[dAppTooltip]',
  host: {
    '(mouseenter)': 'onEnter()',
    '(mouseleave)': 'onLeave()',
  }
})
export class DAppTooltip {

  private overlay = inject(OverlayService);
  private el = inject(ElementRef<HTMLElement>);

  private comp = signal<ComponentRef<CAppTooltip> | null>(null);
  private view = signal<EmbeddedViewRef<unknown> | null>(null);

  tooltipText = input<string>();
  tooltipDisabled = input(false);
  tooltipTemplate = input<TemplateRef<unknown>>();
  tooltipPosition = input<'top' | 'bottom' | 'left' | 'right'>('top');

  onEnter() {
    if (this.tooltipDisabled()) return;

    const componentRef = this.overlay.createComponent(CAppTooltip);
    if (componentRef === undefined) return;

    this.comp.set(componentRef);

    const instance = componentRef.instance;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const gap = 8;

    let style: Record<string, string> = {};

    switch (this.tooltipPosition()) {
      case 'top':
        style = {
          top: `${rect.top - gap}px`,
          left: `${rect.left + rect.width / 2}px`,
          transform: 'translate(-50%, -100%)'
        };
        break;

      case 'bottom':
        style = {
          top: `${rect.bottom + gap}px`,
          left: `${rect.left + rect.width / 2}px`,
          transform: 'translate(-50%, 0)'
        };
        break;

      case 'left':
        style = {
          top: `${rect.top + rect.height / 2}px`,
          left: `${rect.left - gap}px`,
          transform: 'translate(-100%, -50%)'
        };
        break;

      case 'right':
      default:
        style = {
          top: `${rect.top + rect.height / 2}px`,
          left: `${rect.right + gap}px`,
          transform: 'translate(0, -50%)'
        };
        break;
    }

    instance.style = style;
    instance.position = this.tooltipPosition();

    if (this.tooltipTemplate()) {

      const view = this.tooltipTemplate()!.createEmbeddedView({});
      this.view.set(view);

      componentRef.location.nativeElement
        .querySelector('div')
        ?.append(...view.rootNodes);

    } else {
      instance.text = this.tooltipText() || '';
    }
  }

  onLeave() {
    this.view()?.destroy();
    this.comp()?.destroy();

    this.view.set(null);
    this.comp.set(null);
  }
}
