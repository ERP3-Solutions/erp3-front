import { UseCase } from '@base/use-case';
import { IConsultaRucResponse } from '@core/dashboard/organization/domain/dto/consulta-ruc-response.dto';
import { IGetInformationByRucQuery } from '@core/dashboard/organization/domain/query/organization/get-information-by-ruc.query';

export type GetInformationByRucPort = UseCase<
  IGetInformationByRucQuery,
  IConsultaRucResponse
>;
