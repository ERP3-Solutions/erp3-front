import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from '@ui/auth/screens/register/services/register.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'f-auth-organization-register',
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
  templateUrl: './organization-register.fragment.html',
})
export class FAuthOrganizationRegister {
  public translate = inject(TranslateService);

  public registerService = inject(RegisterService)
}