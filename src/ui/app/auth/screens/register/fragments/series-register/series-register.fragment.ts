import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormArray } from '@angular/forms';
import { RegisterService } from '@ui/auth/screens/register/services/register.service';
import { CAppFormField } from '@ui/shared/components/form-field.component';
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
    // Componentes(standalone) externos
    CAppFormField,
  ],
  templateUrl: './series-register.fragment.html',
})
export class FAuthSeriesRegister {
  public translate = inject(TranslateService);
  public registerService = inject(RegisterService)

  public PathTranslatesTypeDocument = PathTranslationTypeDocumentsConstant

  public seriesForms = this.registerService.formSeriesOrganization.get('defaultSeries') as FormArray
}