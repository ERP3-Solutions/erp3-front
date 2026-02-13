import { inject, Injectable } from "@angular/core";
import { AuthStore } from "../store/auth.store";
import { AuthFacade } from "../facades/auth.facade";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

@Injectable()
export class AuthService {
  private readonly store: AuthStore = inject(AuthStore);
  private readonly facade: AuthFacade = inject(AuthFacade);

  public formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  public formRegisterUser = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
    ]),
    lastName: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
    ]),
  });

  loginWithCredentials() {
    this.formLogin.markAllAsTouched()
    if (this.formLogin.valid) {
      this.store.setFormLogin(this.formLogin.value as ICredentialsCommand);
      this.facade.loginWithCredentials();
    }
  }

  registerOrganization() {
    this.formRegisterUser.markAllAsTouched()
    if (this.formRegisterUser.valid) {
      this.store.setFormRegister(this.formRegisterUser.value as IRegisterOrganizationCommand);
      this.facade.registerOrganization();
    }
  }
}
