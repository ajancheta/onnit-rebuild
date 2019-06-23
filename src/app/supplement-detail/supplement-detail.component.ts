import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../products.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-supplement-detail',
  templateUrl: './supplement-detail.component.html',
  styleUrls: ['./supplement-detail.component.css'],
  providers: [ProductService]
})

export class SupplementDetailComponent implements OnInit {

  supplementId: number;
  supplementToDisplay: Product;

  constructor(private route: ActivatedRoute, private location: Location,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.supplementId = parseInt(urlParameters['id']);
    });
    
    this.supplementToDisplay = this.productService.getSupplementById(this.supplementId);
  }

}
