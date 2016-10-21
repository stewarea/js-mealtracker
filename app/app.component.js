"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.Meal("Tacos", 350, "So Good"),
            new meal_model_1.Meal("Italian Sandwich", 580, "Too much oil"),
            new meal_model_1.Meal("Spaghetti", 850, "Great sauce"),
            new meal_model_1.Meal("Hot Wings", 900, "spicy!"),
            new meal_model_1.Meal("Pad Thai", 400, "Very Tasty!"),
            new meal_model_1.Meal("French Fries", 300, "Favorite")
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.masterMealList.push(newMealFromChild);
    };
    AppComponent.prototype.showEdit = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"body\">\n    <div class =\"container\">\n      <div class=\"jumbotron\">\n        <p>Meal Tracker Hacker</p>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"row well add\">\n              <div class=\"col-md-6 add\">\n                <meal-new (newMealSender)=\"addMeal($event)\"\n                ></meal-new>\n              </div>\n\n              <div class=\"col-md-6 edit\">\n                <meal-edit [childSelectedMeal]=\"selectedMeal\" (doneEditingClickedSender)=\"finishedEditing()\"\n                ></meal-edit>\n              </div>\n            </div>\n            <div class=\"row well\">\n              <div class=\"col-md-12 list\">\n                <meal-list [childMealList]=\"masterMealList\" (editButtonClickSender)=\"showEdit($event)\"\n                ></meal-list>\n              </div>\n            </div>\n\n\n          </div>\n          <div class=\"col-sm-1\">\n          </div>\n          <div class=\"col-md-3 well filter\">\n              <meal-display [childMealList]=\"masterMealList\"\n              ></meal-display>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map