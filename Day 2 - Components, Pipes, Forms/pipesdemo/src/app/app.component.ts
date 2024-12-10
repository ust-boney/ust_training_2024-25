import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsPipe } from './pipes/greetings.pipe';
import { SalutationPipe } from './pipes/salutation.pipe';
import { BonusPipe } from './pipes/bonus.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,GreetingsPipe,SalutationPipe,BonusPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  firstName = "Nikhil Shah";
  city = "MUMbai";
  empdetails = {empNo:101, empName:'Nikhil', empCity:'Mumbai',empDesignation:'Developer'}

  dateofjoining = new Date();


  employeedetails = [
    {empNo:101,empName:'Anil',empDesignation:'Developer',empSalary:5000,isEmpPermenant:true,empGender:'Male'},
    {empNo:102,empName:'Sunil',empDesignation:'Manager',empSalary:3000,isEmpPermenant:true,empGender:'Male'},
    {empNo:103,empName:'Romil',empDesignation:'HR',empSalary:5000,isEmpPermenant:true,empGender:'Male'},
    {empNo:104,empName:'Priya',empDesignation:'Developer',empSalary:7000,isEmpPermenant:true,empGender:'Female'},
    {empNo:105,empName:'Riya',empDesignation:'Developer',empSalary:2500,isEmpPermenant:false,empGender:'Female'},
    {empNo:106,empName:'Jiya',empDesignation:'Manager',empSalary:12000,isEmpPermenant:true,empGender:'Female'},
    {empNo:107,empName:'Amar',empDesignation:'Developer',empSalary:18000,isEmpPermenant:true,empGender:'Male'},
    {empNo:108,empName:'Akbar',empDesignation:'Manager',empSalary:3000,isEmpPermenant:false,empGender:'Male'},
    {empNo:109,empName:'Anthony',empDesignation:'Developer',empSalary:2000,isEmpPermenant:true,empGender:'Male'},
    {empNo:110,empName:'Mansi',empDesignation:'HR',empSalary:5000,isEmpPermenant:true,empGender:'Female'}
  ];

}
