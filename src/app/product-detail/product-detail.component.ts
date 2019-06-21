import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productToDisplay: Product;

  constructor() { }

  ngOnInit() {
  }

}
