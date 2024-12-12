import { Component } from '@angular/core';
import { GreetService } from '../../services/greet.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



//we will use dependency injection
//we will want Angular to create a new object of GreetService, and allow it to be
//shared with other components as well

//Thus if you have 5 componens which wants to use this service, we should not have
//5 different objets of service instead have 1 common object among all

//angular will create, share and destroy the object when not needed
//this can be achieved using dependency injection
//2 steps

//1. create a variable of type of service
//2. use the variable in the constructor

_greetSer:GreetService;

constructor(_greetSerREF:GreetService)
{
  this._greetSer = _greetSerREF;
}
}
