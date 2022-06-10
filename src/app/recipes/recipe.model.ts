import {IngredientModel} from "../shared/ingredient.model";

export class Recipe{
  public name : string;
  public description : string;
  public imagepath : string;
  public ingredient : IngredientModel[];

  constructor(name : string,desc : string,imagepath : string , ingredient : IngredientModel[]) {
    this.name = name;
    this.description = desc;
    this.imagepath=imagepath;
    this.ingredient = ingredient;
  }
}
