import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accoutsdetails',
  imports: [],
  templateUrl: './accoutsdetails.component.html',
  styleUrl: './accoutsdetails.component.css'
})
export class AccoutsdetailsComponent implements OnInit {

  user_accNo:any;

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.user_accNo = this.route.snapshot.paramMap.get('accNo');
    //once we have the account number seleced by user, we can 
    //fetch more details about accNo 101 from datasource (json object array or rest api call and get more details)
  }

}
