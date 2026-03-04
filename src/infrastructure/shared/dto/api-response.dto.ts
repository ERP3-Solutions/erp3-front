import { IApiErrorResponseDTO } from "./api-error-response.dto";

export interface IApiResponseDTO<D> {
  success: boolean;
  message?: string;
  data: D;
  errors?: IApiErrorResponseDTO[];
}