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
export class SupplementsComponent {
  supplements: Product [] = [
    new Product("Alpha BRAIN (90ct)", "supplement", "4/5", "79.95" ),
    new Product("Onnit Total Gut Health (30ct)", "supplement", "4/5", "75.90"),
    new Product("Total Mitochondria (30ct)", "supplement", "4.5/5", "59.99"),
    new Product("Mineral Electrolytes Hydration Mix - Fresh Lime (60 serving tub)", "supplement", "4/5", "39.99"),
    new Product("Onnit Glutamine - Unflavored (60 serving tub)", "supplement", "4.75/5", "21.99")
  ];
}
