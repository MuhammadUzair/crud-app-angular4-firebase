import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//angularfire 2
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './Services/firebase.service';

import { Business } from './Business';
import { Catagories } from './Catagories';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  business: Business[];
  catagories: Catagories[];
  appState: string;
  activeKey: string;

  //For edit From

  activeCompany: string;
  activeCategory: string;
  activeYearInBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: any;
  activeCity: any;
  activeStreetAddress: string;
  activeState: string;
  activeZipCode: string;
  activeBusinessRecord: any = {};

  //form validation
  newBusiness: any = {};
  form: FormGroup;
  Msg: any;


  constructor(
    private _firebaseService: FirebaseService,
    private fb: FormBuilder, ) {

    this.form = this.fb.group({
      'company': [this.newBusiness.company || null, Validators.required],
      'category': [this.newBusiness.category || null, Validators.required],
      'yearInBusiness': [this.newBusiness.yearInBusiness || null, Validators.required],
      'description': [this.newBusiness.description || null, Validators.required],
      'phone': [this.newBusiness.phone || null, Validators.required],
      'email': [this.newBusiness.email || null, Validators.required],
      'city': [this.newBusiness.city || null, Validators.required],
      'streetAddress': [this.newBusiness.streetAddress || null, Validators.required],
      'state': [this.newBusiness.state || null, Validators.required],
      'zipCode': [this.newBusiness.zipCode || null, Validators.required],

      //Active Record
      'activeCompany': [this.activeCompany || null, Validators.required],
      'activeCategory': [this.activeCategory || null, Validators.required],
      'activeYearInBusiness': [this.activeYearInBusiness || null, Validators.required],
      'activeDescription': [this.activeDescription || null, Validators.required],
      'activePhone': [this.activePhone || null, Validators.required],
      'activeEmail': [this.activeEmail || null, Validators.required],
      'activeCity': [this.activeCity || null, Validators.required],
      'activeStreetAddress': [this.activeStreetAddress || null, Validators.required],
      'activeState': [this.activeState || null, Validators.required],
      'activeZipCode': [this.activeZipCode || null, Validators.required],

    })

    this._firebaseService.getBusiness().subscribe(businesses => {
      this.business = businesses;
    })
    this._firebaseService.getCatagores().subscribe(categories => {
      this.catagories = categories;
    })

  }

  changeState(state, key) {
    console.log('Changing state to:' + state);

    if (key) {
      console.log('Changing key to:' + key);
      this.activeKey = key;
    }
    this.appState = state;

  }

  filterCategory(category) {
    console.log(category)

    this._firebaseService.getBusiness(category).subscribe(businesses => {
      this.business = businesses;
    })

  }


  addBusiness() {
    let created_at = new Date().toDateString();



    let newBusiness = {
      category: this.newBusiness.category,
      city: this.newBusiness.city,
      company: this.newBusiness.company,
      description: this.newBusiness.description,
      email: this.newBusiness.email,
      phone: this.newBusiness.phone,
      state: this.newBusiness.state,
      streetAddress: this.newBusiness.streetAddress,
      yearInBusiness: this.newBusiness.yearInBusiness,
      zipCode: this.newBusiness.zipCode,
      created_at: created_at

    }
    console.log(newBusiness);
    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default',0);


  }

  showEdit(business) {

    this.changeState('edit', business.$key);

    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeYearInBusiness = business.yearInBusiness;
    this.activeDescription = business.description;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeCity = business.city;
    this.activeStreetAddress = business.streetAddress;
    this.activeState = business.state;
    this.activeZipCode = business.zipCode;
  }

  updateBusiness() {

    let updateBusiness = {
      company: this.activeCompany,
      category: this.activeCategory,
      yearInBusiness: this.activeYearInBusiness,
      description: this.activeDescription,
      phone: this.activePhone,
      email: this.activeEmail,
      city: this.activeCity,
      streetAddress: this.activeStreetAddress,
      state: this.activeState,
      zipCode: this.activeZipCode

    }

    console.log(updateBusiness);

    this._firebaseService.updateBusiness(this.activeKey, updateBusiness)

  }
  deleteBusiness(key) {
    this._firebaseService.deleteBusiness(key)

  }
    // hideEdit(){
    //    this.changeState('default',0);

    // }
  


}
