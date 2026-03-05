import { Entity } from '@core/shared/domain/entity/base.entity';
import { ETypeInformation } from '../../enum/type-information.enum';
import { ProductImage } from './product-image.entity';
import { ProductLogInformation } from './product.entity';
import { TypeAffectation } from './type-afecction.entity';

export class ProductEquivalence implements Entity {
  id: string = '';
  logUserCreated: string = '';
  createdOnUtc: Date = new Date();
  logUserUpdated: string = '';
  updateOnUtc: Date = new Date();

  name: string = '';
  price: number = 0;

  factor: number = 0;
  typeAffectation!: TypeAffectation;

  productId!: string;

  images: ProductImage[] = [];
  logInformations: ProductLogInformation[] = [];

  private constructor() {}
  static create(
    name: string,
    price: number,
    factor: number,
    typeAffectation: TypeAffectation,
    productId: string,
    userCreated: string,
  ): ProductEquivalence {
    const equivalence = new ProductEquivalence();

    equivalence.id = crypto.randomUUID();
    equivalence.name = name;
    equivalence.price = price;
    equivalence.factor = factor;
    equivalence.typeAffectation = typeAffectation;
    equivalence.productId = productId;

    equivalence.logUserCreated = userCreated;
    equivalence.createdOnUtc = new Date();

    return equivalence;
  }

  update(
    name: string,
    price: number,
    factor: number,
    typeAffectation: TypeAffectation,
    userUpdated: string,
  ) {
    this.name = name;
    this.price = price;
    this.factor = factor;
    this.typeAffectation = typeAffectation;

    this.logUserUpdated = userUpdated;
    this.updateOnUtc = new Date();
  }

  addImage(url: string, order: number, userCreated: string) {
    const image = ProductImage.createForEquivalence(
      this.id,
      url,
      order,
      userCreated,
    );

    this.images.push(image);
  }

  addLogInformation(typeInformation: ETypeInformation, userCreated: string) {
    const log = ProductLogInformation.create(
      typeInformation,
      null,
      null,
      this.id,
      userCreated,
    );

    this.logInformations.push(log);
  }
}
