import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from '@ui/auth/screens/register/services/register.service';
import { FAuthUserRegister } from './fragments/user-register/user-register.fragment';
import { ERegisterFormSteps } from './enums/register-form-steps.enum';
import { CAuthForm } from '@ui/auth/components/form.component';
import { FAuthOrganizationRegister } from './fragments/organization-register/organization-register.fragment';
import { FAuthContactRegister } from './fragments/contact-register/contact-register.fragment';
import { TranslateService } from '@ui/shared/services/translate.service';
import { PathTranslationConstant } from './constants/path-translation.constant';
import { OrderStepsConstant } from './constants/order-steps.constant';
import { FAuthSeriesRegister } from './fragments/series-register/series-register.fragment';
import { FAuthPlanRegister } from './fragments/plan-register/plan-register.fragment';
import { validateForm } from '@ui/shared/utils/validate-form.util';

@Component({
  selector: 's-auth-register',
  imports: [
    // Modulos de angular
    ReactiveFormsModule,
    FormsModule,

    // Componentes(standalone) internos
    CAuthForm,
    FAuthUserRegister,
    FAuthOrganizationRegister,
    FAuthContactRegister,
    FAuthSeriesRegister,
    FAuthPlanRegister,
  ],
  templateUrl: 'register.screen.html',
  
  providers: [
    RegisterService,
  ]
})
export class SAuthRegister {
  public StepsFormEnum = ERegisterFormSteps;
  public OrderStepsFormConstant = OrderStepsConstant;
  public PathTranslationFormConstant = PathTranslationConstant;

  public translate = inject(TranslateService);
  public registerService = inject(RegisterService);

  public step = signal<ERegisterFormSteps>(ERegisterFormSteps.PLAN_FORM);

  public indexStep = computed(() => this.OrderStepsFormConstant.findIndex(s => s === this.step()))
  public isLastStep = computed(() => this.indexStep() === (this.OrderStepsFormConstant.length - 1))

  public _stepsForm = {
    [this.StepsFormEnum.USER_FORM]: this.registerService.formRegisterUser,
    [this.StepsFormEnum.ORGANIZATION_FORM]: this.registerService.formRegisterOrganization,
    [this.StepsFormEnum.CONTACT_FORM]: this.registerService.formRegisterContact,
    [this.StepsFormEnum.SERIES_SUCURSAL_FORM]: this.registerService.formSeriesOrganization,
    [this.StepsFormEnum.PLAN_FORM]: this.registerService.formPlanOrganization,
  }

  public currentForm = computed(() => (this.step() in this._stepsForm) ? this._stepsForm[this.step() as keyof typeof this._stepsForm] : undefined)

  public validateStep(): void {
    if (this.indexStep() === -1) return;

    if (this.currentForm() === undefined) return;
    const isValid = validateForm(this.currentForm()!);
    if (!isValid) return;

    if (this.isLastStep()) this.registerService.registerOrganization();
    else this.step.set(this.OrderStepsFormConstant[this.indexStep() + 1]);
  }
}