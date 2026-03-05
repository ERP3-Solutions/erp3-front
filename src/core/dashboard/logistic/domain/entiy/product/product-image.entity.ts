import { Entity } from '@core/shared/domain/entity/base.entity';

export class ProductImage implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  url: string = '';
  order: number = 0;

  productId?: string;
  productVariantId?: string;
  productEquivalenceId?: string;

  private constructor() {}

  static createForProduct(
    productId: string,
    url: string,
    order: number,
    userCreated: string,
  ): ProductImage {
    const image = new ProductImage();

    image.id = crypto.randomUUID();
    image.productId = productId;
    image.url = url;
    image.order = order;

    image.logUserCreated = userCreated;
    image.createdOnUtc = new Date();

    return image;
  }

  static createForVariant(
    variantId: string,
    url: string,
    order: number,
    userCreated: string,
  ): ProductImage {
    const image = new ProductImage();

    image.id = crypto.randomUUID();
    image.productVariantId = variantId;
    image.url = url;
    image.order = order;

    image.logUserCreated = userCreated;
    image.createdOnUtc = new Date();

    return image;
  }

  static createForEquivalence(
    equivalenceId: string,
    url: string,
    order: number,
    userCreated: string,
  ): ProductImage {
    const image = new ProductImage();

    image.id = crypto.randomUUID();
    image.productEquivalenceId = equivalenceId;
    image.url = url;
    image.order = order;

    image.logUserCreated = userCreated;
    image.createdOnUtc = new Date();

    return image;
  }
}
