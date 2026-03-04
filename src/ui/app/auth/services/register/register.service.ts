import { inject, Injectable, signal } from "@angular/core";
import { AuthFacade } from "../../facades/auth.facade";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";

@Injectable()
export class RegisterService {
  private readonly facade: AuthFacade = inject(AuthFacade);

  public loading = signal<boolean>(false);
  public loadingLoadRuc = signal<boolean>(false);

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

  public formRegisterOrganization = new FormGroup({
    ruc: new FormControl('', [
      Validators.required,
    ]),
    tradeName: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    userSolUsername: new FormControl('', [
      Validators.required,
    ]),
    userSolPasswordHash: new FormControl('', [
      Validators.required,
    ]),
  });

  public formRegisterContact = new FormGroup({
    address: new FormControl('', [
      Validators.required,
    ]),
    department: new FormControl('', [
      Validators.required,
    ]),
    province: new FormControl('', [
      Validators.required,
    ]),
    district: new FormControl('', [
      Validators.required,
    ]),
    postalCode: new FormControl('', [
      Validators.required,
    ]),
    phone: new FormControl('', [
      Validators.required,
    ]),
  });

  validateForm(form: FormGroup) {
    form.markAllAsTouched()
    Object.values(form.controls).forEach(v => v.markAsDirty());
    return form.valid;
  }

  registerOrganization() {
    const command = this.formRegisterUser.value as IRegisterOrganizationCommand;
    this.loading.set(true);
    this.facade.registerOrganization(command);
    this.loading.set(false);
  }

  async loadOrganizationByRuc(): Promise<void> {
    const ruc = this.formRegisterOrganization.get('ruc')?.value;
    if (!ruc) return;
    this.loadingLoadRuc.set(true);
    try {
      const company = await this.facade.obtainOrganizationByRuc(ruc);
      this.formRegisterOrganization.patchValue({
        tradeName: company.razonSocial
      })
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingLoadRuc.set(false);
    }
  }
}
