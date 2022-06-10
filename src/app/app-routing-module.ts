import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeAppComponent} from "./home-app/home-app.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NoSelectedRecipeComponent} from "./recipes/no-selected-recipe/no-selected-recipe.component";
import {EditRecipeComponent} from "./recipes/recipe-detail/edit-recipe/edit-recipe.component";
import {NewRecipeComponent} from "./recipes/new-recipe/new-recipe.component";

const appRoute : Routes = [
  {path : '' , component : HomeAppComponent},
  {path : 'recipes' , component : RecipesComponent , children : [
      {path : '' , component : NoSelectedRecipeComponent , pathMatch : 'full'},
      {path : 'new-recipe' , component : NewRecipeComponent},
      {path : ':recipe' , component : RecipeDetailComponent},
      {path : ':recipe/editRecipe' , component : EditRecipeComponent},
    ]},
  {path : 'shopping-List' , component : ShoppingListComponent}
];


@NgModule({
  imports : [RouterModule.forRoot(appRoute)],
  exports : [RouterModule]
})
export class AppRoutingModule{}
