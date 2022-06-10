import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {IngredientModel} from "../../shared/ingredient.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit,OnDestroy {

  @ViewChild('form',{static : false}) shoppingListForm : NgForm;
  subscription : Subscription;
  editMode : boolean = false;
  index : number;

  constructor(private shoppingService : ShoppingListService) {}

  ngOnInit(): void {
  this.subscription= this.shoppingService.editingItem.subscribe((item: IngredientModel)=>{
     this.editMode = true;

      this.index = this.shoppingService.getIngredients().indexOf(item);

     this.shoppingListForm.setValue({
       name  : item.name,
       amount : item.amount
     });
   })
  }
  onSubmit(form? : NgForm) {
    const newIngredient = new IngredientModel(form.value.name,form.value.amount);
    if (!this.editMode) {
      this.shoppingService.inputService.next(newIngredient);
    }else {
     this.shoppingService.updateIngredient(this.index,newIngredient);
     this.editMode=false;
    }
    form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.index);
    this.onClear();
  }
}
