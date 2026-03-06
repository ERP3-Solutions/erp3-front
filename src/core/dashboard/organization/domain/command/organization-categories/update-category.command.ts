import { IUpdateSubCategoryCommand } from './update-sub-category.command';

export interface IUpdateCategoryCommand {
  categoryId: string;
  description: string;
  subCategories: IUpdateSubCategoryCommand[];
}
