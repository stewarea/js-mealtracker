import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-new',
  template:`
  <hr>
  <h2>Add a Meal</h2>
    <form class="form">
      <div class="form-group">
          <label>Meal Name</label>
          <input #newMeal>
      </div>
      <div class="form-group">
          <label>Calories</label>
          <input #newCalories>
      </div>
      <div class="form-group">
          <label>Details</label>
          <input #newDetails>
      </div>
      <button (click)="addMealClicked(newMeal.value, newCalories.value, newDetails.value);
      newName.value =' ';
      newCalories.value =' ';
      newDetails.value =' ';
      ">Add Meal</button>
    </form>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  addMealClicked(name: string, calories: number, description: string) {
    var newMealToAdd: Meal = new Meal(name, calories, description);
    this.newMealSender.emit(newMealToAdd);
  }
}
