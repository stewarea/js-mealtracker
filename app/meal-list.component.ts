import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template:`
    <div class ="row">
      <div class="col-sm-9">
        <h2>All Meals</h2>
        <div *ngFor=" let currentMeal of childMealList">
          {{ currentMeal.name}}
        </div>
      </div>
      <div class="col-sm-9">
      </div>
    </div>
  `

})

export class MealListComponent {
  @Input() childMealList: Meal[];

}
