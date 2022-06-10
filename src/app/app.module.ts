import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import { HeaderAppComponent } from './header/header-app.component';
import { RecipesComponent } from './recipes/recipes.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { HomeAppComponent } from './home-app/home-app.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import { NoSelectedRecipeComponent } from './recipes/no-selected-recipe/no-selected-recipe.component';
import { EditRecipeComponent } from './recipes/recipe-detail/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    HeaderAppComponent,
    RecipesComponent,
    DropdownDirective,
    HomeAppComponent,
    NoSelectedRecipeComponent,
    EditRecipeComponent,
    NewRecipeComponent
  ],
    imports: [
        BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule
    ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
