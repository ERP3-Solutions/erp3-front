export interface IUpdateOrganizationCommand {
  organizationId: string;
  companyName: string;
  email: string;
  phone: string;
  street: string;
  district: string;
  province: string;
  department: string;
  addressReference?: string;
  postalCode?: string;
}
