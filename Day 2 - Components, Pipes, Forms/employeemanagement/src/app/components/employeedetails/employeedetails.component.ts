import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  imports: [NgFor],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent {
  employeedetails = [
    {empNo:101,empName:'Anil',empDesignation:'Developer',empSalary:5000,isEmpPermenant:true},
    {empNo:102,empName:'Sunil',empDesignation:'Manager',empSalary:3000,isEmpPermenant:true},
    {empNo:103,empName:'Romil',empDesignation:'HR',empSalary:5000,isEmpPermenant:true},
    {empNo:104,empName:'Priya',empDesignation:'Developer',empSalary:7000,isEmpPermenant:true},
    {empNo:105,empName:'Riya',empDesignation:'Developer',empSalary:2500,isEmpPermenant:false},
    {empNo:106,empName:'Jiya',empDesignation:'Manager',empSalary:12000,isEmpPermenant:true},
    {empNo:107,empName:'Amar',empDesignation:'Developer',empSalary:18000,isEmpPermenant:true},
    {empNo:108,empName:'Akbar',empDesignation:'Manager',empSalary:3000,isEmpPermenant:false},
    {empNo:109,empName:'Anthony',empDesignation:'Developer',empSalary:2000,isEmpPermenant:true},
    {empNo:110,empName:'Ramesh',empDesignation:'HR',empSalary:5000,isEmpPermenant:true}
  ];

  totalEmployees = this.employeedetails.length;
  permanentEmployees = this.employeedetails.filter(emp => emp.isEmpPermenant).length;
  tempEmployees = this.employeedetails.filter(emp => !emp.isEmpPermenant).length;
  totalSalary = this.employeedetails.reduce((total,emp) => total + emp.empSalary,0);




}
