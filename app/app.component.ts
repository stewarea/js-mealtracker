import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="body">
    <div class ="container">
      <div class="jumbotron">
        <p>Meal Tracker Hacker</p>
      </div>
      <div class="row">
          <div class="col-md-8">
            <div class="row well add">
              <div class="col-md-6 add">
                <meal-new (newMealSender)="addMeal($event)"
                ></meal-new>
              </div>

              <div class="col-md-6 edit">
                <meal-edit [childSelectedMeal]="selectedMeal" (doneEditingClickedSender)="finishedEditing()"
                ></meal-edit>
              </div>
            </div>
            <div class="row well">
              <div class="col-md-12 list">
                <meal-list [childMealList]="masterMealList" (editButtonClickSender)="showEdit($event)"
                ></meal-list>
              </div>
            </div>


          </div>
          <div class="col-sm-1">
          </div>
          <div class="col-md-3 well filter">
              <meal-display [childMealList]="masterMealList"
              ></meal-display>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Tacos", 350, "So Good"),
    new Meal("Italian Sandwich", 580, "Too much oil"),
    new Meal("Spaghetti", 850, "Great sauce"),
    new Meal("Hot Wings", 900, "spicy!"),
    new Meal("Pad Thai", 400, "Very Tasty!"),
    new Meal("French Fries", 300, "Favorite")
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
