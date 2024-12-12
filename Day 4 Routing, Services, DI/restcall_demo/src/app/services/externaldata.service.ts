import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternaldataService {


  _http:HttpClient;
  postdetails:any;

  constructor(http:HttpClient) { 
    this._http=http;
  }
  
  getPostDetails(){
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe(result =>{
      this.postdetails=result;
     // console.log(this.postdetails);
      //noalert('Got the data');
    })
  }
}
