import { CommonModule } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CAppIcon } from './icon.component';

@Component({
  selector: 'c-app-form-field',
  imports: [
    // Modulos de angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    CAppIcon,

    // Componentes(standalone) externos
  ],
  templateUrl: './form-field.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CAppFormField {
  public textLabel = input<string>()
  public color = input<'accent' | 'primary' | 'warn'>('accent')
  public icon = input<string>('')
  public iconModule = input<string>('')
  public type = input<string>('')
  public size = input<'xs' | 'sm' | 'md'>('sm')
  public placeholder = input<string>('')
  public options = input<string[]>([])
  public hasSuffix = input<boolean>(false)
  public name = input<string>('')
  public formData = input.required<FormGroup>()
  public appearance = input<'fill' | 'outline'>('outline')

  hasError(code: string): boolean {
    return !!this.formData()?.get(this.name() || '')?.hasError(code)
  }

  getErrorsApi(): string[] {
    return this.formData()?.get(this.name() || '')?.getError('errorsApi') || []
  }

}