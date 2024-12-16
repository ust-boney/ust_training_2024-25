import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ValidateuserService } from './services/validateuser.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bankingAPP_Guards';

  _validateUserSer:ValidateuserService;

  constructor(_validateUserSerREF:ValidateuserService) {
    this._validateUserSer=_validateUserSerREF;
    
  }

  _logout(){
    this._validateUserSer.isUserValid=false;
  }
}
