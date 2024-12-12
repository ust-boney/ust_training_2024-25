import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetService {


  constructor()
  {
    //this.seperateProducts();
  }



  applicationName = "Angular - Service demo";
  teamMembers = ['Arun','Ramesh','Suresh','Kumar','Rajesh'];

  //this data comes from rest api, which takes it from database
  productList = [
    {pId:101, pName:'TShirt', pPrice:10,pCategory:'Clothing',pIsInstock:true},
    {pId:102, pName:'AirPods', pPrice:10,pCategory:'Electronics',pIsInstock:true},
    {pId:103, pName:'IPhone', pPrice:10,pCategory:'Electronics',pIsInstock:false},
    {pId:104, pName:'IBS', pPrice:10,pCategory:'Electronics',pIsInstock:true},
    {pId:105, pName:'IPad', pPrice:10,pCategory:'Electronics',pIsInstock:true},
    {pId:106, pName:'Boat', pPrice:10,pCategory:'Electronics',pIsInstock:false},
    {pId:107, pName:'Charger', pPrice:10,pCategory:'Electronics',pIsInstock:true},
    {pId:108, pName:'Trimmer', pPrice:10,pCategory:'Electronics',pIsInstock:false},
    {pId:109, pName:'Jeans', pPrice:10,pCategory:'Clothing',pIsInstock:true},
    {pId:110, pName:'Cap', pPrice:10,pCategory:'Clothing',pIsInstock:true},
  ]

  //developer will sepearate the logic from the data and distribute the data as per need
  electronicProducts:any =[];
  clothingProducts:any = [];



  seperateProducts()
  {
    for(var i=0;i<this.productList.length;i++)
    {
      if(this.productList[i].pCategory == 'Electronics')
      {
        this.electronicProducts.push(this.productList[i]);
      }
      else
      {
        this.clothingProducts.push(this.productList[i]);
      }
    }
  }









  greetings()
  {
    alert('Hello and Welcome to the service demo');
  }


}
