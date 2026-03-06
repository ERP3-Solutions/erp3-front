import { IConsultaRucResponse } from '@core/dashboard/organization/domain/dto/consulta-ruc-response.dto';
import { IGetInformationByRucQuery } from '@core/dashboard/organization/domain/query/organization/get-information-by-ruc.query';
import { GetInformationByRucPort } from '@core/dashboard/organization/port/in/organization/get-information-by-ruc.port';
import { IOrganizationRepositoryPort } from '@core/dashboard/organization/port/out/organization-repository.port';

export class GetInformationByRucUseCase implements GetInformationByRucPort {
  constructor(
    private readonly organizationRepository: IOrganizationRepositoryPort,
  ) {}

  async execute(params: IGetInformationByRucQuery): Promise<IConsultaRucResponse> {
    return this.organizationRepository.getInformationByRuc(params);
  }
}
