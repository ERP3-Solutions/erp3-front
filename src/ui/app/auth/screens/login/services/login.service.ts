import { inject, Injectable, signal } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { AuthFacade } from "@ui/auth/facades/auth.facade";

@Injectable()
export class LoginService {
  private readonly facade: AuthFacade = inject(AuthFacade);

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
      const command = this.formLogin.value as ICredentialsCommand;
      this.loading.set(true);
      await this.facade.loginWithCredentials(command);
      await new Promise((resol) => setTimeout(() => resol(true), 3000))
      this.loading.set(false);
    }
  }
}
