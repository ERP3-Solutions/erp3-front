import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { CAuthPasswordMeter } from '@ui/auth/components/password-meter.component';
import { RegisterService } from '@ui/auth/screens/register/services/register.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { CAppFormField } from '@ui/shared/components/form-field.component';
import { CAppIcon } from '@ui/shared/components/icon.component';
import { PathTranslationTypeDocumentsConstant } from '@ui/shared/constants/path-translation-type-documents.constant';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'f-auth-series-register',
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
    CAppIcon,
  ],
  templateUrl: './series-register.fragment.html',
})
export class FAuthSeriesRegister {
  public translate = inject(TranslateService);
  public registerService = inject(RegisterService)

  public PathTranslatesTypeDocument = PathTranslationTypeDocumentsConstant

  public seriesForms = this.registerService.formSeriesOrganization.get('defaultSeries') as FormArray
}