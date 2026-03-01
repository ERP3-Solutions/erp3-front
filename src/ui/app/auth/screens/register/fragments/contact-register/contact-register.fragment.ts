import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from '@ui/auth/services/register/register.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';

@Component({
  selector: 'f-auth-contact-register',
  imports: [
    // Modulos de angular
    ReactiveFormsModule,
    FormsModule,

    // Modulos de librerías externas
    // Componentes(standalone) internos

    // Componentes(standalone) externos
    CAppFormField,
    CAppButton
  ],
  templateUrl: './contact-register.fragment.html',
})
export class FAuthContactRegister {
  public registerService = inject(RegisterService)
}