import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SUPPLEMENTS } from './mock-supplements';

@Injectable()
export class ProductService {

  constructor() {}

  getSupplements() {
    return SUPPLEMENTS;
  }

  getSupplementById(supplementId: number) {
    for (var i=0; i<=SUPPLEMENTS.length - 1; i++) {
      if(SUPPLEMENTS[i].id === supplementId) {
        return SUPPLEMENTS[i];
      }
    }
  }

}
