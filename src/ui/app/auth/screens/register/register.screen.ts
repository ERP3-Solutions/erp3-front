import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CAuthForm } from '@ui/auth/components/form.component';
import { CAuthPasswordMeter } from '@ui/auth/components/password-meter.component';
import { AuthService } from '@ui/auth/services/auth.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';
import { CAppIcon } from '@ui/shared/components/icon.component';

@Component({
  selector: 's-auth-register',
  imports: [
    // Modulos de angular
    ReactiveFormsModule,
    FormsModule,

    // Modulos de librerías externas
    // Componentes(standalone) internos
    CAuthForm,
    CAppIcon,
    CAppButton,
    CAuthPasswordMeter,

    // Componentes(standalone) externos
    CAppFormField,
    CAppIcon
  ],
  templateUrl: 'register.screen.html',
})
export class SAuthRegister {
  public authService = inject(AuthService)

  public hidePassword = signal<boolean>(true);

  registrarOrganizacion() {
    this.authService.registerOrganization();
  }
}