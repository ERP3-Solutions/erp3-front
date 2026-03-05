import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CAuthPasswordMeter } from '@ui/auth/components/password-meter.component';
import { RegisterService } from '@ui/auth/screens/register/services/register.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'f-auth-user-register',
  imports: [
    // Modulos de angular
    ReactiveFormsModule,
    FormsModule,

    // Modulos de librerías externas
    // Componentes(standalone) internos
    CAppIcon,
    CAppButton,
    CAuthPasswordMeter,

    // Componentes(standalone) externos
    CAppFormField,
    CAppIcon
  ],
  templateUrl: './user-register.fragment.html',
})
export class FAuthUserRegister {
  public translate = inject(TranslateService);

  public registerService = inject(RegisterService)
  public hidePassword = signal<boolean>(true);
}