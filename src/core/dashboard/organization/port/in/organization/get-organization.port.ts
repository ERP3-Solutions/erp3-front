import { UseCase } from '@base/use-case';
import { IOrganizationEntity } from '@core/dashboard/organization/domain/entity/organization.entity';
import { IGetOrganizationQuery } from '@core/dashboard/organization/domain/query/organization/get-organization.query';

export type GetOrganizationPort = UseCase<
  IGetOrganizationQuery,
  IOrganizationEntity
>;
