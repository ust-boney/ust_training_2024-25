import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accoutslist',
  imports: [NgFor,RouterLink],
  templateUrl: './accoutslist.component.html',
  styleUrl: './accoutslist.component.css'
})
export class AccoutslistComponent {

    accList = [
      {accNo:101,accName:'Nikhil',accBalance:10000,accType:'Savings'},
      {accNo:102,accName:'Rahul',accBalance:10000,accType:'Savings'},
      {accNo:103,accName:'Karan',accBalance:10000,accType:'Current'},
      {accNo:104,accName:'Priya',accBalance:10000,accType:'Savings'},
      {accNo:105,accName:'Riya',accBalance:10000,accType:'Savings'},
      {accNo:106,accName:'Riya',accBalance:10000,accType:'Current'},
      {accNo:107,accName:'Mohan',accBalance:10000,accType:'Savings'}]

}
