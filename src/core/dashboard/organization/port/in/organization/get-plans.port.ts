import { UseCase } from '@base/use-case';
import { IPlanListItemDto } from '@core/dashboard/organization/domain/dto/plan-list-item.dto';
import { IGetPlansQuery } from '@core/dashboard/organization/domain/query/organization/get-plans.query';

export type GetPlansPort = UseCase<IGetPlansQuery, IPlanListItemDto[]>;
