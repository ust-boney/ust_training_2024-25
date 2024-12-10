import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeedetailsComponent } from "./components/employeedetails/employeedetails.component";
import { ContactusComponent } from "./components/contactus/contactus.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeedetailsComponent, ContactusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeemanagement';
}
