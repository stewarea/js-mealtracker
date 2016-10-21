import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "display",
  pure: false
})

export class DisplayPipe implements PipeTransform {
  transform(input: Meal[], desiredDisplay) {
    var output: Meal[] = [];

    if (desiredDisplay === "LowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 800) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDisplay === "HighCalorie") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories >= 800) {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return null;
    }
  }
}
