import {Component, OnDestroy, OnInit} from "@angular/core";
import {IngredientModel} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector : 'app-shopping-list',
  templateUrl : 'shopping-list.component.html',
  styleUrls : ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy{

  ingredients : IngredientModel[];
  subIngredtient :Subscription;
  EditedIngredient : Subscription;


  constructor(private shoppingService : ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subIngredtient =  this.shoppingService.inputService.subscribe((ingredient : IngredientModel)=>{
        this.shoppingService.addIngredient(ingredient);
      });
    this.EditedIngredient =  this.shoppingService.EditedIngredient.subscribe((ingredients : IngredientModel[])=>{
      this.ingredients = ingredients ;
      }
    )
  }
  ngOnDestroy(): void {
    this.subIngredtient.unsubscribe();
    this.EditedIngredient.unsubscribe();
  }

  onSelectItem(ingredient: IngredientModel) {
    this.shoppingService.editingItem.next(ingredient);
  }
}
