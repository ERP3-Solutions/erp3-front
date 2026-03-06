import { IAddSubCategoryCommand } from './add-sub-category.command';

export interface IRegisterCategoryCommand {
  name: string;
  description: string;
  subCategories: IAddSubCategoryCommand[];
}
