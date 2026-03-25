import { inject, Injectable, signal } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { IRegisterOrganizationCommand } from "@core/auth/domain/command/register-organization.command";
import { TypeDocumentConstant } from "@core/shared/application/constant/type-document.constant";
import { IPlanEntity } from "@core/shared/domain/entity/plan.entity";
import { AuthFacade } from "@ui/auth/facades/auth.facade";

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
    emailAddress: new FormControl('', [
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
    companyName: new FormControl('', [
      Validators.required,
    ]),
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
  });

  public async loadOrganizationByRuc(): Promise<void> {
    const ruc = this.formRegisterOrganization.get('ruc')?.value;
    if (!ruc) return;
    this.loadingLoadRuc.set(true);
    try {
      const company = await this.facade.obtainOrganizationByRuc(ruc);
      this.formRegisterOrganization.patchValue({
        companyName: company.razonSocial,
        address: company.direccion,
        department: company.departamento,
        district: company.distrito,
        province: company.provincia,
      })
    } catch (e) {
      console.error(e);
    } finally {
      this.loadingLoadRuc.set(false);
    }
  }

  public formRegisterContact = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    postalCode: new FormControl('', [
      Validators.required,
    ]),
    phone: new FormControl('', [
      Validators.required,
    ]),
    userSolUsername: new FormControl('', [
      Validators.required,
    ]),
    userSolPasswordHash: new FormControl('', [
      Validators.required,
    ]),
  });

  public formSeriesOrganization = new FormGroup({
    defaultSeries: new FormArray([
      new FormGroup({
        serie: new FormControl('F001', Validators.required),
        typeDocument: new FormControl(TypeDocumentConstant.FACTURA, Validators.required),
        correlativo: new FormControl(0, Validators.required)
      }),
      new FormGroup({
        serie: new FormControl('B001', Validators.required),
        typeDocument: new FormControl(TypeDocumentConstant.BOLETA, Validators.required),
        correlativo: new FormControl(0, Validators.required)
      }),
      new FormGroup({
        serie: new FormControl('FC01', Validators.required),
        typeDocument: new FormControl(TypeDocumentConstant.NOTA_CREDITO, Validators.required),
        correlativo: new FormControl(0, Validators.required)
      }),
      new FormGroup({
        serie: new FormControl('BC01', Validators.required),
        typeDocument: new FormControl(TypeDocumentConstant.NOTA_CREDITO, Validators.required),
        correlativo: new FormControl(0, Validators.required)
      }),
      new FormGroup({
        serie: new FormControl('FD01', Validators.required),
        typeDocument: new FormControl(TypeDocumentConstant.NOTA_DEBITO, Validators.required),
        correlativo: new FormControl(0, Validators.required)
      }),
      new FormGroup({
        serie: new FormControl('BD01', Validators.required),
        typeDocument: new FormControl(TypeDocumentConstant.NOTA_DEBITO, Validators.required),
        correlativo: new FormControl(0, Validators.required)
      }),
    ])
  });

  public formPlanOrganization = new FormGroup({
    planId: new FormControl('', Validators.required),
    planExpirationDate: new FormControl(new Date(), Validators.required)
  });

  public plans = signal<IPlanEntity[]>([]);

  public async loadPlans(): Promise<void> {
    const plans = await this.facade.obtainPlans();
    this.plans.set(plans);
  }

  public registerOrganization() {
    const userForm = this.formRegisterUser.value;
    const orgForm = this.formRegisterOrganization.value;
    const contactForm = this.formRegisterContact.value;
    const seriesForm = this.formSeriesOrganization.value;
    const planForm = this.formPlanOrganization.value;

    const command = {
      name: userForm.firstName ?? '',
      lastName: userForm.lastName ?? '',
      emailAddres: userForm.emailAddress ?? '',
      password: userForm.password ?? '',
      tradeName: orgForm.companyName ?? '',
      companyName: orgForm.companyName ?? '',
      email: contactForm.email ?? '',
      phone: contactForm.phone ?? '',
      ruc: orgForm.ruc ?? '',
      userSolPasswordHash: contactForm.userSolPasswordHash ?? '',
      userSolUsername: contactForm.userSolUsername ?? '',
      street: orgForm.address ?? '',
      addressReference: orgForm.address ?? '',
      district: orgForm.district ?? '',
      province: orgForm.province ?? '',
      department: orgForm.department ?? '',
      postalCode: contactForm.postalCode ?? '',
      legalEntityType: 1,
      planId: planForm.planId ?? '',
      planExpirationDate: planForm.planExpirationDate ?? new Date(),
      defaultSeries: seriesForm.defaultSeries?.map(serie => ({
        lastConsecutive: serie.correlativo ?? 0,
        seriesCode: serie.serie ?? '',
        typeDocument: serie.typeDocument ?? 0
      })) ?? []
    } as IRegisterOrganizationCommand;

    this.loading.set(true);
    this.facade.registerOrganization(command);
    this.loading.set(false);
  }

}
