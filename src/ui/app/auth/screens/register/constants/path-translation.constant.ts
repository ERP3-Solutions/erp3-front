import { ERegisterFormSteps } from "../enums/register-form-steps.enum";

export const PathTranslationConstant: Record<ERegisterFormSteps, string> = {
  [ERegisterFormSteps.USER_FORM]: 'auth.screens.register.subtitle-user-register',
  [ERegisterFormSteps.ORGANIZATION_FORM]: 'auth.screens.register.subtitle-organization-register',
  [ERegisterFormSteps.CONTACT_FORM]: 'auth.screens.register.subtitle-contact-register',
  [ERegisterFormSteps.SERIES_SUCURSAL_FORM]: 'auth.screens.register.subtitle-series-register',
  [ERegisterFormSteps.PLAN_FORM]: 'auth.screens.register.subtitle-plan-register',
}