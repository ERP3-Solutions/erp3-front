import { Component, inject } from '@angular/core';
import { RegisterOrganizationPort } from '@core/auth/port/in/register-organization.port';
import { AuthModule } from '@data/auth.module';
import { REGISTER_ORGANIZATION_TOKEN } from '@data/auth/token/in/register-organization.token';
import { AuthService } from '@ui/auth/services/auth.service';

@Component({
  selector: 's-auth-register',
  imports: [
    // Modulos de angular
    // Modulos de librerías externas
    AuthModule,

    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: 'register.screen.html',
  providers: [
    AuthService
  ]
})
export class SAuthRegister {
  private registerUseCase: RegisterOrganizationPort = inject(REGISTER_ORGANIZATION_TOKEN)

  iniciarSesion() {
    this.registerUseCase.execute({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      organizationDirection: '',
      organizationName: '',
      organizationPhone: '',
      organizationRuc: ''
    });
  }
}