import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { CAppIcon } from './icon.component';

@Component({
  selector: 'c-app-button',
  imports: [
    // Modulos de angular
    CommonModule,

    // Modulos de librerias externas
    // Componentes(standalone) internos
    CAppIcon
  ],
  templateUrl: './button.component.html',
})
export class CAppButton {
  public classButton = input<string>('')
  public color = input<string>('')
  public type = input<'button' | 'submit'>('button')
  public typeButton = input<'flat' | 'stroked' | 'raised' | 'icon'>()
  public disabled = input<boolean>(false)
  public iconModule = input<string>('')
  public icon = input<string>('')
  public classIcon = input<string | string[] | object>('')
  public clickButton = output()
}
