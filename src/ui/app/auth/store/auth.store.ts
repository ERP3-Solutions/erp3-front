import { Injectable, signal } from "@angular/core";
import { ICredentialsCommand } from "@core/auth/domain/command/credentials.command";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

@Injectable()
export class AuthStore {
  private readonly _formLogin = signal<ICredentialsCommand>({
    email: '',
    password: '',
  });

  private readonly _formRegister = signal<IRegisterOrganizationCommand>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organizationName: '',
    organizationDirection: '',
    organizationPhone: '',
    organizationRuc: '',
  });

  readonly formLogin = this._formLogin.asReadonly();
  readonly formRegister = this._formRegister.asReadonly();

  setFormLogin(form: ICredentialsCommand) {
    this._formLogin.set(form);
  }

  setFormRegister(form: IRegisterOrganizationCommand) {
    this._formRegister.set(form);
  }
}
