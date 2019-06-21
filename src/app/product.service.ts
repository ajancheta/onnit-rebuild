import { Injectable } from '@angular/core';
import { Product } from './products.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }

  getProducts(){
    return this.products;
  }

  getSupplementById(supplementId: string){
      return this.database.object('supplements/' + supplementId);
  }

  updateSupplement(localUpdatedAlbum){
    var supplementEntryInFirebase = this.getSupplementById(localUpdatedSupplement.$key);
    supplementEntryInFirebase.update({name: localUpdatedSupplement.name,
                                rating: localUpdatedSupplement.rating,
                                price: localUpdatedSupplement.price});
  }

  deleteSupplement(localSupplementToDelete){
    var supplementEntryInFirebase = this.getSupplementById(localSupplementToDelete.$key);
    supplementEntryInFirebase.remove();
  }
}
