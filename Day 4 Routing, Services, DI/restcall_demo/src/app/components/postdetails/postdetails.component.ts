import { Component } from '@angular/core';
import { ExternaldataService } from '../../services/externaldata.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-postdetails',
  imports: [NgFor],
  templateUrl: './postdetails.component.html',
  styleUrl: './postdetails.component.css'
})
export class PostdetailsComponent {
    _makeapicallsSER:ExternaldataService;

    constructor(_makecalls:ExternaldataService) { 

      this._makeapicallsSER = _makecalls;
    }
}
