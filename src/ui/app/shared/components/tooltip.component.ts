import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TooltipPositionType } from '../types/position.type';

@Component({
  selector: 'c-app-tooltip',
  imports: [
    // Modulos de angular
    CommonModule,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: './tooltip.component.html',
})
export class CAppTooltip {
  @Input() text!: string;
  @Input() position!: TooltipPositionType;
  @Input() style!: Record<string, string>;

  public positionClasses: Record<TooltipPositionType, string> = {
    top: `
    before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2
    before:top-full before:border-6 before:border-transparent
    before:border-t-surface-20
  `,
    bottom: `
    before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2
    before:bottom-full before:border-6 before:border-transparent
    before:border-b-surface-20
  `,
    left: `
    before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
    before:left-full before:border-6 before:border-transparent
    before:border-l-surface-20
  `,
    right: `
    before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2
    before:right-full before:border-6 before:border-transparent
    before:border-r-surface-20
  `,
  };
}