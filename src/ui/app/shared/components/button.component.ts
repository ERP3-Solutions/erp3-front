import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
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
  public color = input<'accent' | 'success' | 'danger' | 'primary'>('accent')
  public type = input<'button' | 'submit'>('button')
  public typeButton = input<'flat' | 'stroked' | 'raised' | 'icon' | 'icon-square'>()
  public subTypeIcon = input<'square' | 'rounded'>('rounded')
  public disabled = input<boolean>(false)
  public iconModule = input<string>('')
  public icon = input<string>('')
  public classIcon = input<string | string[] | object>('')
  public clickButton = output()
  public isActive = input<boolean>(false)

  public buttonClassDynamic = computed(() => {
    const typeButton = this.typeButton();
    const subTypeIcon = this.subTypeIcon();
    const color = this.color();

    const classes: (string | false | null | undefined)[] = [
      'flex justify-center items-center transition-colors cursor-pointer w-full uppercase text-sm font-medium',
      this.classButton(),

      typeButton === 'flat' &&
      (color === 'accent'
        ? 'dark:bg-primary-20 bg-primary-10 dark:hover:bg-primary-30 hover:bg-primary-20 dark:active:bg-primary-20 active:bg-primary-30 dark:text-primary-on-primary text-light-primary-on-primary'
        : color === 'success'
          ? 'bg-success-20 hover:bg-success-30 active:bg-success-20 text-success-on-success'
          : 'bg-error-20 hover:bg-error-30 active:bg-error-20 text-error-on-error'),

      typeButton === 'stroked' &&
      'border-2 dark:border-surface-30 border-surface-60 dark:hover:border-surface-40 hover:border-surface-40 dark:active:border-surface-30 active:border-surface-30 dark:text-surface-on-surface text-light-surface-on-surface',

      (typeButton === 'flat' || typeButton === 'stroked') &&
      'rounded p-2',

      typeButton === 'icon' &&
      'dark:hover:bg-primary-on-primary-container hover:bg-light-primary-on-primary-container dark:active:bg-primary-primary-container active:bg-light-primary-primary-container p-1',

      typeButton === 'icon' && subTypeIcon === 'square' &&
      'rounded',

      typeButton === 'icon' && subTypeIcon === 'rounded' &&
      'rounded-full',

      this.isActive() &&
      'dark:bg-primary-primary-container dark:hover:bg-primary-primary-container bg-light-primary-primary-container hover:bg-light-primary-primary-container',
    ];

    return classes.filter(Boolean).join(' ');
  })
}
