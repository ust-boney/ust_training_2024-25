import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductmanagementserService {

  _http:HttpClient;
  productList:any;

  productToView:any; //this will have the id of user clikd from productlist
  detailedProduct:any; //this we will search the product again from the list

  constructor(_httpREF:HttpClient)
   {
    this._http = _httpREF;
    
  }
  searchProductToView(pno:any)
  {
    this.productToView = pno;
    console.log(this.productToView);
    for(var i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].id==this.productToView)
      {
        this.detailedProduct=this.productList[i];
        console.log(this.detailedProduct);
      }
    }
  }

  
  


  getAllProducts()
  {
    this._http.get('https://fakestoreapi.com/products/')
    .subscribe(res=>{
      this.productList=res
    });
  }
}
