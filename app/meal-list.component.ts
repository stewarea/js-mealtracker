import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
    <div class ="row">
      <div class="col-sm-9">
        <h1>All Meals</h1>
        <div *ngFor=" let currentMeal of childMealList">
          <h2>{{ currentMeal.name}}</h2>
          <h5>Calories: {{ currentMeal.calories }}</h5>
          <h5>Description: {{ currentMeal.details }}</h5>
        </div>
      </div>
      <div class="col-sm-9">
        <h2>Meal Display</h2>
      </div>
    </div>
  `

})

export class MealListComponent {
  @Input() childMealList: Meal[];

}
