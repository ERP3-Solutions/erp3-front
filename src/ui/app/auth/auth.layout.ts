import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AuthStore } from './store/auth.store';
import { AuthFacade } from './facades/auth.facade';
import { AuthModule } from '@data/auth.module';

@Component({
  selector: 'l-auth',
  imports: [
    // Modulos de angular
    RouterOutlet,

    // Modulos de librerías externas
    // Modulos de capas externas
    AuthModule,

    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: './auth.layout.html',
  providers: [
    AuthService,
    AuthStore,
    AuthFacade,
  ]
})
export class LAuth {
}
