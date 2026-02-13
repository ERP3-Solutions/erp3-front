import { CommonModule } from '@angular/common';
import { Component, input, OnChanges } from '@angular/core';

@Component({
  selector: 'c-auth-password-meter',
  imports: [
    // Modulos de angular
    CommonModule,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: './password-meter.component.html',
})
export class CAuthPasswordMeter implements OnChanges {
  public password = input('');

  strengthPoints = 0;
  strengthMessage = '';
  strengthColor: 'warn' | 'accent' | 'primary' = 'warn';

  validators = [
    {
      name: 'hasUpperCase',
      handler: (text: string) => /[A-Z]/.test(text),
      description: 'Debe contener al menos una letra mayúscula'
    },
    {
      name: 'hasLowerCase',
      handler: (text: string) => /[a-z]/.test(text),
      description: 'Debe contener al menos una letra minúscula'
    },
    {
      name: 'hasNumbers',
      handler: (text: string) => /\d/.test(text),
      description: 'Debe contener al menos un número'
    },
    {
      name: 'hasSpecialChars',
      handler: (text: string) => /[@$!%*?.&]/.test(text),
      description: 'Debe contener al menos un carácter especial'
    },
    {
      name: 'lengthSufficient',
      handler: (text: string) => text.length >= 8,
      description: 'Debe tener al menos 8 caracteres'
    }
  ]

  ngOnChanges() {
    this.evaluateStrength();
  }

  private evaluateStrength() {
    const strengthFilter = this.validators.filter((v) => !v.handler(this.password()))
    this.strengthPoints = this.validators.length - strengthFilter.length
    this.strengthMessage = strengthFilter.length > 0 ? strengthFilter[0].description : ''
  }
}