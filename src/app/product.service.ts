import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { SUPPLEMENTS } from './mock-supplements';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  supplements: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.supplements = database.list('supplements');
  }

  getSupplements() {
    return this.supplements;
  }

  getSupplementById(supplementId: number) {
    for (var i=0; i<=SUPPLEMENTS.length - 1; i++) {
      if(SUPPLEMENTS[i].id === supplementId) {
        return SUPPLEMENTS[i];
      }
    }
  }

}
