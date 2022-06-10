import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {IngredientModel} from "../../shared/ingredient.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeData : Recipe;
  recipe : Recipe;


  constructor(private recipeService : RecipeService , private route : ActivatedRoute) { }

  ngOnInit() {
  // this.recipeService.getOneRecipe(this.route.snapshot.params['recipe']);
   this.route.params.subscribe((params)=>{
     this.recipe = this.recipeService.getOneRecipe(params['recipe']);
   })
  }

  addToShoppingList() {
    this.recipeService.addToShoopingListFromService(this.recipe.ingredient);
  }
}
