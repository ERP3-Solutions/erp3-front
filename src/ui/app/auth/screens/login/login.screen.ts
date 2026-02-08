import { Component, inject } from '@angular/core';
import { AuthModule } from '@data/auth.module';
import { AuthService } from '@ui/auth/services/auth.service';

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
  private authService: AuthService = inject(AuthService)

  iniciarSesion() {
    this.authService.loginWithCredentials({
      email: '',
      password: ''
    });
  }
}