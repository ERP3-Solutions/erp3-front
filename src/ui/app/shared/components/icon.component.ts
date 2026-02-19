import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'c-app-icon',
  imports: [
    // Modulos de angular
    CommonModule,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: './icon.component.html',
})
export class CAppIcon {
  public svgModule = input.required<string>();
  public svgIcon = input.required<string>();
  public className = input<string | string[] | object>('');

  public iconRef = computed(() => `/ui/assets/icons/svg/sprites/${this.svgModule()}-sprites.svg#icon-${this.svgIcon()}`)
}