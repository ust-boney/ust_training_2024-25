import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ValidateuserService } from '../../services/validateuser.service';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    _validateUserSer:ValidateuserService;
    constructor(_validateUserSerREF:ValidateuserService)
    {
      this._validateUserSer=_validateUserSerREF;
    }

    userName='';
    password='';

    login(frm:any)
    {
        this.userName = frm.value.username;
        this.password = frm.value.password;
        this._validateUserSer.checkLogin(this.userName,this.password);
    }

   
}
