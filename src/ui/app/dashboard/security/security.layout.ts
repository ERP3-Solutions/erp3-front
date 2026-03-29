import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesModule } from '@data/roles.module';
import { SecurityFacade } from './facades/security.facade';
import { TranslateService } from '@ui/shared/services/translate.service';

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
export class LSecurity {
  private translate = inject(TranslateService);

  constructor() {
    effect(async () => {
      await this.translate.load('security');
    })
  }
}