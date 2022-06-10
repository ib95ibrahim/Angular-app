import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../recipe.service";
import {Recipe} from "../../recipe.model";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipe : Recipe;
   recipeForm : FormGroup;

  constructor(private route : ActivatedRoute , private recipeService : RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
       this.recipe = this.recipeService.getOneRecipe(params['recipe']);
    })

    this.recipeForm = new FormGroup({
      'recipeName' : new FormControl(this.recipe.name),
      'recipeDescription' : new FormControl(this.recipe.description),
      'imageUrl' : new FormControl(this.recipe.imagepath),
      'ingredientName' : new FormControl(null),
      'ingredientAmount' : new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
