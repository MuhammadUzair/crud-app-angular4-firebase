webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_firebase_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_firebaseService, fb) {
        var _this = this;
        this._firebaseService = _firebaseService;
        this.fb = fb;
        this.activeBusinessRecord = {};
        //form validation
        this.newBusiness = {};
        this.form = this.fb.group({
            'company': [this.newBusiness.company || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'category': [this.newBusiness.category || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'yearInBusiness': [this.newBusiness.yearInBusiness || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'description': [this.newBusiness.description || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'phone': [this.newBusiness.phone || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'email': [this.newBusiness.email || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'city': [this.newBusiness.city || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'streetAddress': [this.newBusiness.streetAddress || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'state': [this.newBusiness.state || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'zipCode': [this.newBusiness.zipCode || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            //Active Record
            'activeCompany': [this.activeCompany || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeCategory': [this.activeCategory || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeYearInBusiness': [this.activeYearInBusiness || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeDescription': [this.activeDescription || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activePhone': [this.activePhone || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeEmail': [this.activeEmail || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeCity': [this.activeCity || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeStreetAddress': [this.activeStreetAddress || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeState': [this.activeState || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'activeZipCode': [this.activeZipCode || null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
        this._firebaseService.getBusiness().subscribe(function (businesses) {
            _this.business = businesses;
        });
        this._firebaseService.getCatagores().subscribe(function (categories) {
            _this.catagories = categories;
        });
    }
    AppComponent.prototype.changeState = function (state, key) {
        console.log('Changing state to:' + state);
        if (key) {
            console.log('Changing key to:' + key);
            this.activeKey = key;
        }
        this.appState = state;
    };
    AppComponent.prototype.filterCategory = function (category) {
        var _this = this;
        console.log(category);
        this._firebaseService.getBusiness(category).subscribe(function (businesses) {
            _this.business = businesses;
        });
    };
    AppComponent.prototype.addBusiness = function () {
        var created_at = new Date().toDateString();
        var newBusiness = {
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
        };
        console.log(newBusiness);
        this._firebaseService.addBusiness(newBusiness);
        this.changeState('default', 0);
    };
    AppComponent.prototype.showEdit = function (business) {
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
    };
    AppComponent.prototype.updateBusiness = function () {
        var updateBusiness = {
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
        };
        console.log(updateBusiness);
        this._firebaseService.updateBusiness(this.activeKey, updateBusiness);
    };
    AppComponent.prototype.deleteBusiness = function (key) {
        this._firebaseService.deleteBusiness(key);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(168),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_firebase_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//angularfire 2






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase, 'my-app-name'),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__Services_firebase_service__["a" /* FirebaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(51)();
// imports


// module
exports.push([module.i, ".top-bar,.menu > ul{\r\n     background-color: #e67e22;\r\n     color: #fff;\r\n}\r\n\r\n.menu > ul >li {\r\n list-style-type: none;\r\n font-size: 26px;\r\n}\r\n.margin{\r\n    margin-top: 10px;\r\n}\r\n.butnDiv{\r\n    margin-top: 20px;\r\n   \r\n}\r\n.btnWidth{\r\n    width: 200px;\r\n    color: #fff !important;\r\n}\r\n@media(max-width:992px){\r\n    .btnWidth{\r\n    width: 100% !important;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\r\n  <div class=\"row\">\r\n    <div class=\"top-bar-left\">\r\n      <div class=\"menu\">\r\n        <ul>\r\n          <li class=\"menu-text\">Business Contacts</li>\r\n        </ul>\r\n      </div>\r\n      <!--<div class=\"top-bar-right\"></div>-->\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row margin\">\r\n  <div class=\"large-6 columns butnDiv\">\r\n    <button class=\"button success btnWidth\" (click)=\"changeState('add',0)\">Add Business</button>\r\n\r\n  </div>\r\n  <div class=\"large-6 columns\">\r\n    <label>\r\n     Filter Category\r\n     <select (change)=\"filterCategory(selectCategory.value)\" #selectCategory>\r\n       <option *ngFor=\"let category of catagories\" value=\"{{ category.name }}\">{{ category.name }}</option>\r\n     </select>\r\n\r\n   </label>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"appState == 'add' || appState == 'edit' || appState == 'extent'\">\r\n  <div class=\"row\">\r\n    <div class=\"large-12 columns\">\r\n      <button (click)=\"changeState('default',0)\" class=\"button alert btnWidth\">Go Back</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--  Add Bussiness -->\r\n<div *ngIf=\"appState == 'add' \" class=\"row\">\r\n  <div class=\"large-12 columns\">\r\n\r\n    <h3>Add Business</h3>\r\n    <form [formGroup]=\"form\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>Company\r\n            <input type=\"text\" placeholder=\"Company Name\"\r\n             [formControl]=\"form.controls['company']\" [(ngModel)]=\"newBusiness.company\">\r\n          </label>\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Category\r\n            <select [formControl]=\"form.controls['category']\" [(ngModel)]=\"newBusiness.category\"  >\r\n              <option *ngFor=\"let category of catagories\" value=\"{{ category.name }}\">{{ category.name }}</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>Years In Business\r\n             <input type=\"number\" placeholder=\"year in Bussiness\"\r\n             [formControl]=\"form.controls['yearInBusiness']\" [(ngModel)]=\"newBusiness.yearInBusiness\" >\r\n          </label>\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>description\r\n             <input type=\"text\" placeholder=\"description\"\r\n               [formControl]=\"form.controls['description']\" [(ngModel)]=\"newBusiness.description\" >\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>Phone\r\n             <input type=\"text\" placeholder=\"Phone no\" \r\n              [formControl]=\"form.controls['phone']\" [(ngModel)]=\"newBusiness.phone\" >\r\n          </label>\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n\r\n          <label>Email\r\n             <input type=\"text\" placeholder=\"Email\" \r\n             [formControl]=\"form.controls['email']\" [(ngModel)]=\"newBusiness.email\" >\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>City\r\n             <input type=\"text\" placeholder=\"city\"\r\n             [formControl]=\"form.controls['city']\" [(ngModel)]=\"newBusiness.city\" >\r\n          </label>\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Street Address\r\n             <input type=\"text\" placeholder=\"Street Address\"\r\n             [formControl]=\"form.controls['streetAddress']\" [(ngModel)]=\"newBusiness.streetAddress\" >\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>State\r\n             <input type=\"text\" placeholder=\"state\"\r\n              [formControl]=\"form.controls['state']\" [(ngModel)]=\"newBusiness.state\" >\r\n          </label>\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Zip Code\r\n             <input type=\"text\" placeholder=\"Zip Code\" \r\n              [formControl]=\"form.controls['zipCode']\" [(ngModel)]=\"newBusiness.zipCode\" >\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <button class=\"button\" (click)=\"addBusiness()\" [disabled]=\"!newBusiness.company || !newBusiness.category\r\n     || !newBusiness.yearInBusiness || !newBusiness.description || !newBusiness.phone || !newBusiness.email \r\n     || !newBusiness.streetAddress || !newBusiness.state || !newBusiness.zipCode || !newBusiness.city\">submit</button>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--  Edit Bussiness -->\r\n<div *ngIf=\"appState == 'edit' \" class=\"row\">\r\n  <div class=\"large-12 columns\">\r\n\r\n    <h3>Edit Business</h3>\r\n    <form [formGroup]=\"form\">\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>Company\r\n            <input type=\"text\" placeholder=\"Company Name\" name=\"activeCompany\"\r\n             [formControl]=\"form.controls['activeCompany']\" [(ngModel)]=\"activeCompany\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Category\r\n            <select [formControl]=\"form.controls['activeCategory']\" [(ngModel)]=\"activeCategory\">\r\n              <option *ngFor=\"let category of catagories\" value=\"{{ category.name }}\">{{ category.name }}</option>\r\n            </select>\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>Years In Business\r\n             <input type=\"number\" placeholder=\"year in Bussiness\"\r\n             [formControl]=\"form.controls['activeYearInBusiness']\" [(ngModel)]=\"activeYearInBusiness\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>description\r\n             <input type=\"text\" placeholder=\"description\"\r\n               [formControl]=\"form.controls['activeDescription']\" [(ngModel)]=\"activeDescription\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>Phone\r\n             <input type=\"text\" placeholder=\"Phone no\" \r\n              [formControl]=\"form.controls['activePhone']\" [(ngModel)]=\"activePhone\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Email\r\n             <input type=\"text\" placeholder=\"Email\" \r\n             [formControl]=\"form.controls['activeEmail']\" [(ngModel)]=\"activeEmail\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>City\r\n             <input type=\"text\" placeholder=\"city\"\r\n             [formControl]=\"form.controls['activeCity']\" [(ngModel)]=\"activeCity\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Street Address\r\n             <input type=\"text\" placeholder=\"Street Address\"\r\n             [formControl]=\"form.controls['activeStreetAddress']\" [(ngModel)]=\"activeStreetAddress\" >\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"large-6  small-12 columns\">\r\n          <label>State\r\n             <input type=\"text\" placeholder=\"Street Address\"\r\n              [formControl]=\"form.controls['activeState']\" [(ngModel)]=\"activeState\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n        <div class=\"large-6 small-12 columns\">\r\n          <label>Zip Code\r\n             <input type=\"text\" placeholder=\"Zip Code\" \r\n              [formControl]=\"form.controls['activeZipCode']\" [(ngModel)]=\"activeZipCode\" >\r\n          </label>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <button class=\"button btnWidth\" (click)=\"updateBusiness()\"\r\n      [disabled]=\"!activeCompany || !activeCategory || !activeYearInBusiness\r\n     || !activeDescription || !activePhone || !activeEmail || !activeCity \r\n     || !activeStreetAddress || !activeState || !activeZipCode\">\r\n     Update\r\n     </button>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"appState == 'extent' \">\r\n  <div *ngFor=\"let businessData of business\">\r\n    <div *ngIf=\"businessData.$key == activeKey\">\r\n      <div class=\"row\">\r\n        <div class=\"large-5 columns large-offset-1\">\r\n          <h3>{{businessData.company}}</h3>\r\n          <p>Category: {{ businessData.category }}</p>\r\n          <p>Years In Business: {{ businessData.yearInBusiness }}</p>\r\n          <p>{{ businessData.description }}</p>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <h4>Contect Info</h4>\r\n        <ul>\r\n          <li>\r\n            <div>{{businessData.phone}} </div>\r\n            <div>{{businessData.email}} </div>\r\n            <div>{{businessData.streetAddress}} </div>\r\n            <div>{{businessData.city}} </div>\r\n            <div>{{businessData.state}} </div>\r\n            <div>{{businessData.zipCode}} </div>\r\n\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"large-12 columns\">\r\n    <div *ngIf=\"business\">\r\n      <table>\r\n        <thead>\r\n\r\n          <tr>\r\n            <th>Company</th>\r\n            <th>Category</th>\r\n            <th>Phone</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let businessData of business\">\r\n            <td>{{businessData.company}}</td>\r\n            <td>{{businessData.category}}</td>\r\n            <td>{{businessData.phone}}</td>\r\n            <td>\r\n              <button class=\"button \" (click)=\"changeState('extent',businessData.$key)\">More</button>\r\n              <button class=\"button secondary\" (click)=\"showEdit(businessData)\">Edit</button>\r\n              <button class=\"button alert\" (click)=\"deleteBusiness(businessData.$key)\">Delete</button>\r\n            </td>\r\n          </tr>\r\n\r\n\r\n\r\n\r\n\r\n        </tbody>\r\n\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--<ul>\r\n  <li class=\"text\" *ngFor=\"let businessData of business\">\r\n    <div>{{businessData.company}} </div>\r\n\r\n  </li>\r\n</ul>-->"

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(db) {
        this.db = db;
    }
    FirebaseService.prototype.getBusiness = function (category) {
        if (category === void 0) { category = null; }
        if (category != null) {
            this.businesses = this.db.list('businesses', {
                query: {
                    orderByChild: 'category',
                    equalTo: category
                }
            });
        }
        else {
            this.businesses = this.db.list('businesses');
        }
        return this.businesses;
    };
    FirebaseService.prototype.getCatagores = function () {
        this.catagories = this.db.list('catagories');
        return this.catagories;
    };
    FirebaseService.prototype.addBusiness = function (newBusiness) {
        return this.businesses.push(newBusiness);
    };
    FirebaseService.prototype.updateBusiness = function (key, updateBusiness) {
        return this.businesses.update(key, updateBusiness);
    };
    FirebaseService.prototype.deleteBusiness = function (key) {
        return this.businesses.remove(key);
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// export const environment = {
//   production: false
// };
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyCNC7rQDo3xqBypQoGQcHagm6m6U9jzvwo",
        authDomain: "businesscontacts-eb3dc.firebaseapp.com",
        databaseURL: "https://businesscontacts-eb3dc.firebaseio.com",
        projectId: "businesscontacts-eb3dc",
        storageBucket: "businesscontacts-eb3dc.appspot.com",
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 93;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(61);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.bundle.js.map