import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'l-auth',
  imports: [
    // Modulos de angular
    RouterOutlet,

    // Modulos de librerías externas
    // Modulos de capas externas
    // Componentes(standalone) internos
    // Componentes(standalone) externos

    MatCardModule
  ],
  templateUrl: './auth.layout.html',
  providers: [
    AuthService
  ]
})
export class LAuth { }
