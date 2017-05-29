import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Business } from '../Business';
import { Catagories } from '../Catagories';
import 'rxjs/add/operator/map'

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  catagories: FirebaseListObservable<Catagories[]>;

  constructor(private db: AngularFireDatabase) {

  }
  getBusiness(category: string = null) {

    if (category != null) {
      this.businesses = this.db.list('businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as
        FirebaseListObservable<Business[]>;



    }
    else {

      this.businesses = this.db.list('businesses') as FirebaseListObservable<Business[]>;
    }


    return this.businesses;

  }
  getCatagores() {

    this.catagories = this.db.list('catagories') as FirebaseListObservable<Catagories[]>;
    return this.catagories;

  }
   addBusiness(newBusiness) {
   return this.businesses.push(newBusiness);

  }

   updateBusiness(key ,updateBusiness) {
   return this.businesses.update(key,updateBusiness);

  }
   deleteBusiness(key) {
   return this.businesses.remove(key)

  }


}
