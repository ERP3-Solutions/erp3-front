import { Component, inject, signal } from '@angular/core';
import { LoginService } from '@ui/auth/screens/login/services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CAuthForm } from '@ui/auth/components/form.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { CAppButton } from '@ui/shared/components/button.component';
import { TranslateService } from '@ui/shared/services/translate.service';

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
  providers: [
    LoginService,
  ]
})
export class SAuthLogin {
  public translate = inject(TranslateService);
  public loginService = inject(LoginService)

  public hidePassword = signal<boolean>(true);

  iniciarSesion() {
    this.loginService.loginWithCredentials();
  }
}