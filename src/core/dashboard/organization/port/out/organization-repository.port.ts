import { IUpdateOrganizationCommand } from '../../domain/command/organization/update-organization.command';
import { IConsultaRucResponse } from '../../domain/dto/consulta-ruc-response.dto';
import { IPlanListItemDto } from '../../domain/dto/plan-list-item.dto';
import { IOrganizationEntity } from '../../domain/entity/organization.entity';
import { IGetInformationByRucQuery } from '../../domain/query/organization/get-information-by-ruc.query';
import { IGetOrganizationQuery } from '../../domain/query/organization/get-organization.query';
import { IGetPlansQuery } from '../../domain/query/organization/get-plans.query';

export interface IOrganizationRepositoryPort {
  updateOrganization(
    command: IUpdateOrganizationCommand,
  ): Promise<IOrganizationEntity>;

  getInformationByRuc(
    query: IGetInformationByRucQuery,
  ): Promise<IConsultaRucResponse>;

  getOrganization(query: IGetOrganizationQuery): Promise<IOrganizationEntity>;

  getPlans(query: IGetPlansQuery): Promise<IPlanListItemDto[]>;
}
