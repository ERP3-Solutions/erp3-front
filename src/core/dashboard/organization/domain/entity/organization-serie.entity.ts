import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeDocument } from '../enum/type-document.enum';
import { ISeriesCode } from '../value-object/series-code.value-object';

export interface IOrganizationSerieEntity extends Entity {
  organizationId: string;
  code: ISeriesCode;
  active: boolean;
  lastConsecutive: number;
  typeDocument: ETypeDocument;
}
