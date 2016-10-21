import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-edit',
  template:`
  <div *ngIf="childSelectedMeal">
    <h1>Edit {{ childSelectedMeal.name }}</h1>

    <div class= "form-group">
      <label>Edit Name</label>
      <input [(ngModel)]="childSelectedMeal.name">
    </div>
    <div class= "form-group">
      <label>Edit Calorie Info:</label>
      <input [(ngModel)]="childSelectedMeal.calories">
    </div>
    <div class= "form-group">
      <label>Edit Details</label>
      <input [(ngModel)]="childSelectedMeal.details">
      <button (click)="doneEditingClicked()">Done Editing</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingClickedSender = new EventEmitter();
  doneEditingClicked() {
    this.doneEditingClickedSender.emit();
  }
}
