import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../products.model';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})

export class ProductDetailComponent implements OnInit {
  productId: string;
  productToDisplay: Product;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService) { }

    ngOnInit() {
      this.route.params.forEach((urlParametersArray) => {
       this.productId = urlParametersArray['id'];
     });
     this.productService.getSupplementById(this.productId).subscribe(dataLastEmittedFromObserver => {
       this.productToDisplay = new Product(dataLastEmittedFromObserver.name,
                                        dataLastEmittedFromObserver.type,
                                        dataLastEmittedFromObserver.rating,
                                        dataLastEmittedFromObserver.price)
     })
    }

}
