import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginResult ="";
  isLoginSuccess = false;

  checkUserLogin(userDetails:any)
  {
    if(userDetails.value.username == "Nikhil" && userDetails.value.password == "Nik@1234")
    {
      this.loginResult = "Login Successfull, Welcome " + userDetails.value.username;
      this.isLoginSuccess = true;
    }
    else
    {
      this.loginResult = "Sorry " + userDetails.value.username + ", Password is incorrect";
      this.isLoginSuccess = false;
    }
  }

}
