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
  supplements: FirebaseListObservable<any[]>;

  constructor(private router: Router, private productService: ProductService) {}  

  ngOnInit() {
    this.supplements = this.productService.getSupplements();
  }

  goToDetailPage(clickedSupplement: Product) {
    // this.router.navigate(['supplements', clickedSupplement.id]);
  };
}
