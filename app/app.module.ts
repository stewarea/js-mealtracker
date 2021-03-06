import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './meal-new.component';
import { EditMealComponent } from './meal-edit.component';
import { DisplayPipe } from './displaymeal.pipe';
import { DisplayMealComponent } from './meal-display.component';

@NgModule({
  imports: [BrowserModule, FormsModule],

  declarations:
  [ AppComponent,
  MealListComponent, NewMealComponent, EditMealComponent, DisplayPipe, DisplayMealComponent],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
