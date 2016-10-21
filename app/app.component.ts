import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Meal Tracker Hacker</h1>
    <hr>
    <div class="row">
      <div class='col-md-9'>
        <meal-list [childMealList]="masterMealList" (editButtonClickSender)="showEdit($event)"
        ></meal-list>
      </div>

      <div class="col-md-3">
        <meal-display [childMealList]="masterMealList"
        ></meal-display>
      </div>

        <div class="row">
          <div class="col-md-4">
            <meal-new (newMealSender)="addMeal($event)"
            ></meal-new>
          </div>

          <div class="col-md-5">
            <meal-edit [childSelectedMeal]="selectedMeal" (doneEditingClickedSender)="finishedEditing()"
            ></meal-edit>
          </div>

        </div>


    </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Tacos", 350, "So Good"),
    new Meal("Italian Sandwich", 580, "too much oil")
  ];

  selectedMeal: Meal = null;

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  showEdit(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }

}
