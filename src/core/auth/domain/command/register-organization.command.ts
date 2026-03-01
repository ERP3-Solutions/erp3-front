export interface IRegisterOrganizationCommand {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  organizationName: string;
  organizationDirection: string;
  organizationPhone: string;
  organizationRuc: string;
}