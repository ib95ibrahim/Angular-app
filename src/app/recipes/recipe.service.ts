import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()

export class RecipeService{
  constructor(private shoppingService : ShoppingListService) {
  }

  recipeSelected = new Subject<Recipe>();
  recipes = new Subject<Recipe[]>();

  private recipesService : Recipe[] = [
    new Recipe('first-recipe',
      'desc of the first recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [new IngredientModel('lfriit',3),new IngredientModel('lkhobz',7)]
    ),
    new Recipe('second-recipe ','desc of the second recipe ','https://www.thespruceeats.com/thmb/cO72JFFH0TCAufENSxUfqE8TmKw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg',
      [new IngredientModel('matixa',2)]),
    new Recipe('third-recipe ','desc of the third recipe ','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F31%2F16354-easy-meatloaf-mfs-74-1x1-1.jpg',
      [new IngredientModel('btata',1)])
  ];
  getRecipes(){
    return this.recipesService.slice();
  }
  addToShoopingListFromService(ingredient : IngredientModel[]){
    this.shoppingService.addIngredientArray(ingredient);
  }
  getOneRecipe(recipe :string){
    return this.recipesService.find((r) => {
      return r.name === recipe;
    });
  }

}
