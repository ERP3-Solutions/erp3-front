import { Entity } from '@core/shared/domain/entity/base.entity';

export class Price implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();
}
