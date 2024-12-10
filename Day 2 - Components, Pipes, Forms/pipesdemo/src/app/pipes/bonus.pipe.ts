import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

    transform(value: number, designation:string) {
      if(designation == 'Developer')
      {
         return value * 0.15;
      }
      else if(designation == 'Manager')
      {
         return value * 0.12;
      }
      else if(designation == 'HR')
      {
        return value * 0.18;
      }
      return value;
    }

}
