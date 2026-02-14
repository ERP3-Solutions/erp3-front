import { inject, Injectable, signal } from "@angular/core";
import { AuthFacade } from "../../facades/auth.facade";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

@Injectable()
export class RegisterService {
  private readonly facade: AuthFacade = inject(AuthFacade);

  public loading = signal<boolean>(false);

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

  registerOrganization() {
    this.formRegisterUser.markAllAsTouched()
    if (this.formRegisterUser.valid) {
      const command = this.formRegisterUser.value as IRegisterOrganizationCommand;
      this.loading.set(true);
      this.facade.registerOrganization(command);
      this.loading.set(false);
    }
  }
}
