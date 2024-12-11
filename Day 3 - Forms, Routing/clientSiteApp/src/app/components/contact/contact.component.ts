import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  componentName='Contact Us';

  contactEmail = "org@somesite.com";
  phoneNumber = "123-456-7890";
  customerCare = "123-456-7890";
  emergencyNo = "123-456-7890";

}
