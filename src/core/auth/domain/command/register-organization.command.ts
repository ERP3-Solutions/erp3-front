export interface IRegisterOrganizationCommand {
  tradeName: string;
  companyName: string;
  email: string;
  phone: string;
  ruc: string;
  userSolUsername: string;
  userSolPasswordHash: string;
  street: string;
  district: string;
  province: string;
  department: string;
  addressReference: string;
  postalCode: string;
  name: string;
  lastName: string;
  emailAddres: string;
  password: string;
  legalEntityType: number;
  planId: string;
  planExpirationDate: Date;
  defaultSeries: {
    seriesCode: string;
    typeDocument: number;
    lastConsecutive: number;
  }[]

}