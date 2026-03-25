import { HttpStatusCode } from "@angular/common/http";

export interface IApiErrorDTO {
  detail: string;
  status: HttpStatusCode;
  title: string;
}
