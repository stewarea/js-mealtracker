import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Meal Tracker Hacker</h1>
    <hr>
    <meal-list [childMealList]="masterMealList" (editButtonClickSender)="showEdit($event)"
    ></meal-list>

    <meal-new (newMealSender)="addMeal($event)"
    ></meal-new>

    <meal-edit [childSelectedMeal]="selectedMeal" (doneEditingClickedSender)="finishedEditing()"
    ></meal-edit>

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
