import { inject, Injectable, signal } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginErrors } from "@core/auth/application/errors/login.errors";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { AuthFacade } from "@ui/auth/facades/auth.facade";
import { ToastService } from "@ui/shared/services/toast.service";
import { TranslateService } from "@ui/shared/services/translate.service";

@Injectable()
export class LoginService {
  private readonly facade: AuthFacade = inject(AuthFacade);
  private readonly toast: ToastService = inject(ToastService);
  private readonly translate: TranslateService = inject(TranslateService);

  public loading = signal<boolean>(false);

  public formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  async loginWithCredentials() {
    this.formLogin.markAllAsTouched();
    Object.values(this.formLogin.controls).forEach(v => v.markAsDirty());
    if (this.formLogin.valid) {
      const command: ICredentialsCommand = {
        username: this.formLogin.value?.email ?? '',
        password: this.formLogin.value?.password ?? ''
      };
      this.loading.set(true);
      try {
        await this.facade.loginWithCredentials(command);
      } catch(e: unknown) {
        const err = e as keyof typeof LoginErrors;
        if (err === LoginErrors.USER_NOT_FOUND) {
          this.toast.show({
            duration: 3000,
            position: 'topCenter',
            text: this.translate.tSignal('auth.screens.login.errors.user-not-found')(),
            type: 'error'
          })
        }
      }
      this.loading.set(false);
    }
  }
}
