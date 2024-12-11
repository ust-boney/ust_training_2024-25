import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {



  newRegistration(formData:any)
  {

  }

  technologyList:string[] = ['Angular','Azure','React','AWS'];

  addNewTech(formData:any)
  {
      this.technologyList.push(formData.value.technology);
  }
}








