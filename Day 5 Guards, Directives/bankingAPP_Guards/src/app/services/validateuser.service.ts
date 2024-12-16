import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidateuserService implements CanActivate {


  isUserValid:boolean=false; //u can program this to some token like JWT token
  userName:string='';
  password:string = '';

  canActivate():boolean {
    return this.isUserValid;
  }


  checkLogin(userName:string,password:string):boolean{
    if(userName == 'Nikhil' && password == 'Nikhil@12334'){
      //u can make rest api call, and validate the username and pwd 
      // //from REST API
      this.isUserValid=true;
      return true;
    }
    return false;
  }

  constructor() { }
}
