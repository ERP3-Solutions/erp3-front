import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CAppIcon } from './icon.component';

@Component({
  selector: 'c-app-input',
  imports: [
    // Modulos de angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Modulos de librerias externas
    // Componentes(standalone) internos
    CAppIcon
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class CAppInput {
  label = input.required<string>();
  icon = input.required<string>();
  color = input.required<'primary' | 'secondary' | 'accent'>();
  type = input.required<string>();
  size = input<'xs' | 'sm' | 'md'>('sm');
  placeholder = input.required<string>();
  hasSuffix = input<boolean>(false);
  appearance = input<'fill' | 'outline'>('outline');

  model = input.required<string>();
  modelChange = output<string>();
}