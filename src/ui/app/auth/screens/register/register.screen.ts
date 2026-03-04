import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterService } from '@ui/auth/services/register/register.service';
import { FAuthUserRegister } from './fragments/user-register/user-register.fragment';
import { ERegisterFormSteps } from './enums/register-form-steps.enum';
import { CAuthForm } from '@ui/auth/components/form.component';
import { FAuthOrganizationRegister } from './fragments/organization-register/organization-register.fragment';
import { FAuthContactRegister } from './fragments/contact-register/contact-register.fragment';
import { TranslateService } from '@ui/shared/services/translate.service';

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
  ],
  templateUrl: 'register.screen.html',
  providers: [
    RegisterService
  ]
})
export class SAuthRegister {
  public translate = inject(TranslateService);
  public registerService = inject(RegisterService);

  public step = signal<ERegisterFormSteps>(ERegisterFormSteps.CONTACT_FORM);
  public steps = ERegisterFormSteps;

  public orderSteps = [
    this.steps.USER_FORM,
    this.steps.ORGANIZATION_FORM,
    this.steps.CONTACT_FORM,
    this.steps.SERIES_SUCURSAL_FORM,
    this.steps.PLAN_FORM,
  ]
  public indexStep = computed(() => this.orderSteps.findIndex(s => s === this.step()))
  public isLastStep = computed(() => this.indexStep() === (this.orderSteps.length - 1))

  public _stepsForm = {
    [this.steps.USER_FORM]: this.registerService.formRegisterUser,
    [this.steps.ORGANIZATION_FORM]: this.registerService.formRegisterOrganization,
    [this.steps.CONTACT_FORM]: this.registerService.formRegisterContact,
  }

  public currentForm = computed(() => (this.step() in this._stepsForm) ? this._stepsForm[this.step() as keyof typeof this._stepsForm] : undefined)

  public validateStep(): void {
    if (this.indexStep() === -1) return;

    if (this.currentForm() === undefined) return;
    const isValid = this.registerService.validateForm(this.currentForm()!);
    if (!isValid) return;

    if (this.isLastStep()) this.registerService.registerOrganization();
    else this.step.set(this.orderSteps[this.indexStep() + 1]);
  }
}