export interface IRegisterBranchCommand {
  name: string;
  street: string;
  district: string;
  province: string;
  department: string;
  addressReference?: string;
  postalCode?: string;
  registerSunat: boolean;
  codeSunat: number;
}
