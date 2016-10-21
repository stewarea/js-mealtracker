import { Component, Input, Output, EventEmitter } from '@angular/core';
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
          <button (click)="editButton(currentMeal)">Edit Meal</button>
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
  @Output() editButtonClickSender = new EventEmitter();

  editButton(mealToEdit: Meal) {
  this.editButtonClickSender.emit(mealToEdit);
}
}
