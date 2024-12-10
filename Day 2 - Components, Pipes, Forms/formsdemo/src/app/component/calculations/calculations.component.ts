import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  imports: [FormsModule],
  templateUrl: './calculations.component.html',
  styleUrl: './calculations.component.css'
})
export class CalculationsComponent {


  additions =0;
  subtractions =0;
  multiplications =0;
  divisions =0;

  calculate(formObj: any) 
  {
      this.additions = formObj.value.num1 + formObj.value.num2;
      this.subtractions = formObj.value.num1 - formObj.value.num2;
      this.multiplications = formObj.value.num1 * formObj.value.num2;
      this.divisions = formObj.value.num1 / formObj.value.num2;
  }
}
