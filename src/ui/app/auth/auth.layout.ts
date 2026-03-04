import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthFacade } from './facades/auth.facade';
import { AuthModule } from '@data/auth.module';
import { TranslateService } from '@ui/shared/services/translate.service';

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
    AuthFacade,
  ]
})
export class LAuth {
  private translate = inject(TranslateService);

  constructor() {
    effect(async () => {
      await this.translate.load('auth');
    })
  }
}
