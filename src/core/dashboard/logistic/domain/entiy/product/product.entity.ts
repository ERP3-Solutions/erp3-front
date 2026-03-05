import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeInformation } from '../../enum/type-information.enum';

export class ProductLogInformation implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  typeInformation!: ETypeInformation;

  productId?: string;
  productVariantId?: string;
  productEquivalenceId?: string;

  private constructor() {}

  static create(
    typeInformation: ETypeInformation,
    productId: string | null,
    productVariantId: string | null,
    productEquivalenceId: string | null,
    userCreated: string,
  ): ProductLogInformation {
    const log = new ProductLogInformation();

    log.id = crypto.randomUUID();
    log.typeInformation = typeInformation;

    log.productId = productId ?? undefined;
    log.productVariantId = productVariantId ?? undefined;
    log.productEquivalenceId = productEquivalenceId ?? undefined;

    log.logUserCreated = userCreated;
    log.createdOnUtc = new Date();

    return log;
  }
}
