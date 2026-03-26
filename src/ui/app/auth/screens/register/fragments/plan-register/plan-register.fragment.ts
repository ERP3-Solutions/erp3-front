import { Component, effect, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IPlanEntity } from '@core/plans/domain/entity/plan.entity';
import { RegisterService } from '@ui/auth/screens/register/services/register.service';
import { CAppButton } from '@ui/shared/components/button.component';
import { TextFormatPipe } from '@ui/shared/pipes/text-format.pipe';
import { TranslateService } from '@ui/shared/services/translate.service';

@Component({
  selector: 'f-auth-plan-register',
  imports: [
    // Modulos de angular
    ReactiveFormsModule,
    FormsModule,
    CAppButton,
    // Componentes(standalone) externos
    TextFormatPipe
],
  templateUrl: './plan-register.fragment.html',
})
export class FAuthPlanRegister {
  public translate = inject(TranslateService);

  public registerService = inject(RegisterService);

  constructor() {
    effect(() => {
      this.registerService.loadPlans()
    })
  }

  public selectPlan(plan: IPlanEntity) {
    this.registerService.formPlanOrganization.get('planId')?.setValue(plan.id)
    const date = new Date();
    date.setMonth(date.getMonth() + 3);
    this.registerService.formPlanOrganization.get('planExpirationDate')?.setValue(date);
  }
}