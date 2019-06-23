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

}
