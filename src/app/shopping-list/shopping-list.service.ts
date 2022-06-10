import {IngredientModel} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService{
  inputService  = new Subject<IngredientModel>();
  editingItem = new Subject<IngredientModel>();
  EditedIngredient = new Subject<IngredientModel[]>();

 private ingredients :  IngredientModel[] = [
    new IngredientModel('ingredient-1',11),
    new IngredientModel('ingredient-2',22)
  ];

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient){
    if(ingredient.name) this.ingredients.push(ingredient);
   }
  addIngredientArray(ingredient : IngredientModel[]){
     this.ingredients.push(...ingredient);
  }

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredients[index] = newIngredient;
    this.EditedIngredient.next(this.ingredients);
  }
  deleteIngredient(index: number){
    console.log(index);
    this.ingredients.splice(index,1);
  }
}
