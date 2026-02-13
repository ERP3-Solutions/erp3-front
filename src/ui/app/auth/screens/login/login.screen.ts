import { Component, inject, signal } from '@angular/core';
import { AuthService } from '@ui/auth/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CAuthForm } from '@ui/auth/components/form.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { CAppButton } from '@ui/shared/components/button.component';

@Component({
  selector: 's-auth-login',
  imports: [
    // Modulos de angular
    ReactiveFormsModule,
    FormsModule,

    // Modulos de librerías externas
    // Componentes(standalone) internos
    CAuthForm,
    CAppIcon,
    CAppButton,

    // Componentes(standalone) externos
    CAppFormField,
    CAppIcon
  ],
  templateUrl: 'login.screen.html',
})
export class SAuthLogin {
  public authService = inject(AuthService)

  public hidePassword = signal<boolean>(true);

  iniciarSesion() {
    this.authService.loginWithCredentials();
  }
}