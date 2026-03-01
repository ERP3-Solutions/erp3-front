import { CommonModule } from '@angular/common';
import { Component, computed, input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  public textLabel = input<string>();
  public color = input<'accent' | 'primary' | 'warn'>('accent');
  public icon = input<string>('');
  public iconModule = input<string>('');
  public type = input<string>('');
  public size = input<'xs' | 'sm' | 'md'>('sm');
  public placeholder = input<string>('');
  public options = input<string[]>([]);
  public name = input<string>('');
  public formData = input.required<FormGroup>();
  public appearance = input<'fill' | 'outline'>('outline');

  public control = computed(() =>
    this.formData().get(this.name() || '')
  );

  public isRequired = computed(() =>
    this.control()?.hasValidator(Validators.required) ?? false
  );

  invalid() {
    const control = this.formData().get(this.name() || '')
    if (control !== null) {
      return (control!.touched && control!.dirty) && control.invalid;
    }
    return false;
  }

  hasError(code: string): boolean {
    const control = this.formData().get(this.name() || '')
    if (control !== null) {
      return (control!.touched && control!.dirty) && control!.hasError(code);
    }
    return false;
  }

  getErrorsApi(): string[] {
    const control = this.formData().get(this.name() || '')
    if (control !== null) {
      return (control!.touched && control!.dirty) && control!.getError('errorsApi') || [];
    }
    return [];
  }
}