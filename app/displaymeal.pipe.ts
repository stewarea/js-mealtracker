import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from 'meal.model';

@Pipe({
  name: "display",
  pure: false
})

export class DisplayPipe implements PipeTransform {
  transform(input: Meal[], desiredDisplay) {
    var output: Meal[] = [];

    if (desiredDisplay === "Low Calorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 800) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDisplay === "High Calorie") {
        for (var i = 0; i < input.length; i++) {
          if (input[i] >= 800) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}
