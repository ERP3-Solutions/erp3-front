import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesModule } from '@data/roles.module';
import { SecurityFacade } from './facades/security.facade';

@Component({
  selector: 'l-security',
  imports: [
    // Modulos de angular
    RouterOutlet,
    // Modulos de librerías externas
    // Modulos de capas externas
    RolesModule,
    // Componentes(standalone) internos
    // Componentes(standalone) externos
  ],
  templateUrl: './security.layout.html',
  providers: [
    SecurityFacade
  ]
})
export class LSecurity { }