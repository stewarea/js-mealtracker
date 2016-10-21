import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>Meal Tracker Hacker</h1>
    <hr>
    <meal-list [childMealList]="masterMealList"
    ></meal-list>

    <meal-new (newMealSender)="addMeal($event)"
    ></meal-new>

  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Tacos", 350, "So Good"),
    new Meal("Italian Sandwich", 580, "too much oil")
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
