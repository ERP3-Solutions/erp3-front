export interface ICompanyRucEntity {
  ruc: string;
  razonSocial: string;
  nombreComercial: string | null;
  telefonos: string[];
  estado: string;
  condicion: string;
  direccion: string;
  departamento: string;
  provincia: string;
  distrito: string;
  ubigeo: string;
}