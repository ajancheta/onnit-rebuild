import { Component, OnInit } from '@angular/core';
import { Product } from '../products.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrls: ['./supplements.component.css'],
  providers: [ProductService]
})
export class SupplementsComponent implements OnInit {
  products: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  goToDetailPage(clickedSupplement) {
    this.router.navigate(['supplements', clickedSupplement.$key]);
  };

}
