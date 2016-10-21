import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template:`
        <h1>Filter Meals</h1>

        <select (change)="onChange($event.target.value)">
          <option value="All">All Meals </option>
          <option value="LowCalorie">Low Calorie</option>
          <option value="HighCalorie">High Calorie</option>
        </select>

        <div *ngFor=" let currentMeal of childMealList | display:selectedDisplay">
          <h2>{{ currentMeal.name}}</h2>
          <h5>Calories: {{ currentMeal.calories }}</h5>
          <h5>Description: {{ currentMeal.details }}</h5>
        </div>
  `

})

export class DisplayMealComponent {
  @Input() childMealList: Meal[];

  public selectedDisplay: string = "All";
  onChange(optionFromMenu) {
    this.selectedDisplay = optionFromMenu
  }
}
