import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../../app.routes';
import { ProductmanagementserService } from '../../services/productmanagementser.service';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.css'
})
export class ProductviewComponent implements OnInit {

  selectedProduct:any;
  _productManagementSer:ProductmanagementserService;

  constructor(private route:ActivatedRoute,productManagementSer:ProductmanagementserService)
  {
    this._productManagementSer = productManagementSer;
  }

  ngOnInit(): void {
    this.selectedProduct = this.route.snapshot.paramMap.get('pid');
    
    this._productManagementSer.searchProductToView(this.selectedProduct);
  }




}
