import { Component } from '@angular/core';
import { GreetService } from '../../services/greet.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-electronics',
  imports: [NgFor],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  _greetSer:GreetService;

  constructor(_greetSerREF:GreetService)
  {
    this._greetSer = _greetSerREF;
    this._greetSer.seperateProducts();
  }
}
