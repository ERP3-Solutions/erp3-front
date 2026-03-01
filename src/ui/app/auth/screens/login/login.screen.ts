import { Component, inject } from '@angular/core';
import { LoginWithCredentialsPort } from '@core/auth/port/in/login-with-credentials.port';
import { AuthModule } from '@data/auth.module';
import { LOGIN_WITH_CREDENTIALS_TOKEN } from '@data/auth/token/in/login-with-credentials.token';

@Component({
  selector: 's-auth-login',
  imports: [
    // Modulos de angular
    // Modulos de librerías externas
    AuthModule,

    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: 'login.screen.html',
})
export class SAuthLogin {
  private loginUseCase: LoginWithCredentialsPort = inject(LOGIN_WITH_CREDENTIALS_TOKEN)

  iniciarSesion() {
    this.loginUseCase.execute({
      email: '',
      password: ''
    });
  }
}