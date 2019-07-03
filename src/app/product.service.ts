import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { SUPPLEMENTS } from './mock-supplements';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class ProductService {
  supplements: Observable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.supplements = database.list('supplements').valueChanges();
  }

  getSupplements() {
    return this.supplements;
  }

  getSupplementById(supplementId: string) {
    // for (var i=0; i<=SUPPLEMENTS.length - 1; i++) {
    //   if(SUPPLEMENTS[i].id === supplementId) {
    //     return SUPPLEMENTS[i];
    //   }
    // }
  }

}
