import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeInformation } from '../../enum/type-information.enum';
import { ProductImage } from './product-image.entity';
import { ProductLogInformation } from './product.entity';
import { TypeAffectation } from './type-afecction.entity';
import { Unit } from './units.entity';
import { VariantAttribute } from './variant-attribute.entity';

export class ProductVariant implements Entity {
  id: string = '';

  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  name: string = '';
  price?: number;

  units!: Unit;
  typeAffectation!: TypeAffectation;

  productId: string = '';

  attributes: VariantAttribute[] = [];
  images: ProductImage[] = [];
  logInformations: ProductLogInformation[] = [];

  // =========================
  // Constructor privado
  // =========================
  private constructor() {}

  // =========================
  // Factory
  // =========================
  static create(
    name: string,
    price: number | undefined,
    units: Unit,
    typeAffectation: TypeAffectation,
    productId: string,
    userCreated: string,
  ): ProductVariant {
    const variant = new ProductVariant();

    variant.id = crypto.randomUUID();
    variant.name = name;
    variant.price = price;
    variant.units = units;
    variant.typeAffectation = typeAffectation;
    variant.productId = productId;

    variant.logUserCreated = userCreated;
    variant.createdOnUtc = new Date();

    return variant;
  }

  // =========================
  // Methods
  // =========================

  addAttribute(name: string, value: string): void {
    this.attributes.push(new VariantAttribute(name, value));
  }

  addImage(url: string, order: number): void {
    const image = ProductImage.createForVariant(this.id, url, order);
    this.images.push(image);
  }

  addLogInformation(
    typeInformation: ETypeInformation,
    userCreated: string,
  ): void {
    const log = ProductLogInformation.create(
      typeInformation,
      undefined,
      this.id,
      undefined,
      userCreated,
    );

    this.logInformations.push(log);
  }
}
