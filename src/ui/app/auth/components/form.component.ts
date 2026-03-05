import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppIcon } from '@ui/shared/components/icon.component';

@Component({
  selector: 'c-auth-form',
  imports: [
    // Modulos de angular
    RouterLink,

    // Modulos de librerías externas
    // Componentes(standalone) externos
    CAppButton,
    CAppIcon,
  ],
  templateUrl: './form.component.html',
})
export class CAuthForm {
  title = input.required<string>();
  subtitle = input.required<string>();
  footerText = input.required<string>();
  footerTextLink = input.required<string>();
  footerLinkRouter = input.required<string>();
  submitText = input.required<string>();
  submitTextSecondary = input<string>();
  loading = input.required<boolean>();

  clickSecondaryButton = output();
  clickPrimaryButton = output();
}
