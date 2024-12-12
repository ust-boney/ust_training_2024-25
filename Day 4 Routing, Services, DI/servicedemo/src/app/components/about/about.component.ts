import { Component } from '@angular/core';
import { GreetService } from '../../services/greet.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  _greetSer:GreetService;

  constructor(_greetSerREF:GreetService)
  {
    this._greetSer = _greetSerREF;
  }

}
