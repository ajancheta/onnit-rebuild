import { Component } from '@angular/core';
import { Product } from '../products.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supplements',
  templateUrl: './supplements.component.html',
  styleUrls: ['./supplements.component.css']
})
export class SupplementsComponent {

  constructor(private router: Router) {} 
  
  supplements: Product [] = [
    new Product("Alpha BRAIN (90ct)", "supplement", "4/5", "79.95", 1),
    new Product("Onnit Total Gut Health (30ct)", "supplement", "4/5", "75.90", 2),
    new Product("Total Mitochondria (30ct)", "supplement", "4.5/5", "59.99", 3),
    new Product("Mineral Electrolytes Hydration Mix - Fresh Lime (60 serving tub)", "supplement", "4/5", "39.99", 4),
    new Product("Onnit Glutamine - Unflavored (60 serving tub)", "supplement", "4.75/5", "21.99", 5)
  ];

  goToDetailPage(clickedSupplement: Product) {
    this.router.navigate(['supplements', clickedSupplement.id]);
  };
}
