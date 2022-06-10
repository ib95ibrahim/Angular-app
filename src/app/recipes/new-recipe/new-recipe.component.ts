import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  @ViewChild('recipeName') recipeName : ElementRef;
  @ViewChild('recipeDescription') recipeDescription : ElementRef;
  recipe : Recipe;
  constructor() { }


  ngOnInit(): void {

  }

  addRecipe() {
   // this.recipeService.addRecipeService(this.recipe);
  }
}
