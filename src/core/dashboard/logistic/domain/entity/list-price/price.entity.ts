import { Entity } from '@core/shared/domain/entity/base.entity';

export interface IPriceEntity extends Entity {
  id: string;
  logUserCreated: string;
  createdOnUtc: Date;
  logUserUpdated: string;
  updateOnUtc: Date;
}
