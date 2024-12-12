import { Component } from '@angular/core';
import { ProductmanagementserService } from '../../services/productmanagementser.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productlist',
  imports: [NgFor,RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {


  _productManagementSer:ProductmanagementserService;

  constructor(productManagementSer:ProductmanagementserService)
  {
    this._productManagementSer=productManagementSer;
    this._productManagementSer.getAllProducts();
  }
}
