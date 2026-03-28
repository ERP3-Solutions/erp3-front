import { Component, Input, TemplateRef, signal, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'c-app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
})
export class CAppMenu {
  @Input() templateRef?: TemplateRef<unknown>;
  @Input() style: Record<string, string> = {};
  @Input() transformOrigin = 'top left';
  @Input() instante?: ComponentRef<unknown>;

  public closing = signal(false);

  close() {
    if (this.closing()) return;
    this.closing.set(true);
    setTimeout(() => {
      this.instante?.destroy()
    }, 150);
  }
}