import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [NgFor],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
  componentName='Careers at Etisalat';

  currentOpenings=[
    "Web Developer",
    "DBA",
    "DevOps",
    "QA",
    "Data Science",
    "AI ML",
    "Tester"
  ]
}
