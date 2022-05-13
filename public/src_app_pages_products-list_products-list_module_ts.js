(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_products-list_products-list_module_ts"],{

/***/ 4091:
/*!*************************************************!*\
  !*** ./src/app/configuration/auth-constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthConstants": () => (/* binding */ AuthConstants)
/* harmony export */ });
class AuthConstants {
}
AuthConstants.USER = 'user';
;


/***/ }),

/***/ 2299:
/*!*********************************************************************!*\
  !*** ./src/app/pages/products-list/products-list-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListPageRoutingModule": () => (/* binding */ ProductsListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _products_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list.page */ 7019);




const routes = [
    {
        path: '',
        component: _products_list_page__WEBPACK_IMPORTED_MODULE_0__.ProductsListPage
    }
];
let ProductsListPageRoutingModule = class ProductsListPageRoutingModule {
};
ProductsListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsListPageRoutingModule);



/***/ }),

/***/ 6262:
/*!*************************************************************!*\
  !*** ./src/app/pages/products-list/products-list.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListPageModule": () => (/* binding */ ProductsListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _products_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-list-routing.module */ 2299);
/* harmony import */ var _products_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-list.page */ 7019);







let ProductsListPageModule = class ProductsListPageModule {
};
ProductsListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _products_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsListPageRoutingModule
        ],
        declarations: [_products_list_page__WEBPACK_IMPORTED_MODULE_1__.ProductsListPage]
    })
], ProductsListPageModule);



/***/ }),

/***/ 7019:
/*!***********************************************************!*\
  !*** ./src/app/pages/products-list/products-list.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListPage": () => (/* binding */ ProductsListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_products_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products-list.page.html */ 4681);
/* harmony import */ var _products_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-list.page.scss */ 9516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/auth-constants */ 4091);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);








let ProductsListPage = class ProductsListPage {
    constructor(router, httpClient, storageService) {
        this.router = router;
        this.httpClient = httpClient;
        this.storageService = storageService;
    }
    ngOnInit() {
        this.storageService.get(src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.USER).then(res => {
            this.user = res.user;
            console.log(this.user);
        });
        // this.httpClient.getProducts().subscribe(products => {
        //   console.log(products);
        //   this.products = products;
        // })
    }
    ionViewWillEnter() {
        this.httpClient.getProducts().subscribe(products => {
            console.log(products);
            this.products = products;
        });
    }
    newProduct() {
        this.router.navigate(['product-detail']);
    }
    navigate(productId) {
        console.log(productId);
        this.router.navigate([`product-detail/${productId}`]);
    }
    goHome() {
        this.router.navigate(['home']);
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
};
ProductsListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
ProductsListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-products-list',
        template: _raw_loader_products_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsListPage);



/***/ }),

/***/ 9516:
/*!*************************************************************!*\
  !*** ./src/app/pages/products-list/products-list.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".page-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  overflow: scroll;\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n}\n\n.product-list-container {\n  background-color: rgba(101, 101, 102, 0.432);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 35px;\n  border-radius: 40px;\n  min-height: 600px;\n  width: 95%;\n  z-index: 100;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\nion-item {\n  --background: transparent;\n  --border-color: rgb(134, 134, 134);\n}\n\n.list-container {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0dBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lcnsgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTEsIDU0LCAxMjkgKTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYigxMSwgNTQsIDEyOSwgNjUlKSAwJSwgcmdiKDcsIDE4LCAzMikgMzUlLCByZ2IoNCwgMTYsIDM2LCA4NSUpIDEwMCUpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1saXN0LWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMDEsIDEwMiwgMC40MzIpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDEzNCwgMTM0LCAxMzQpO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59Il19 */");

/***/ }),

/***/ 4681:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products-list/products-list.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-container\" *ngIf=\"products\">\r\n    <div class=\"product-list-container\">\r\n      <div class=\"title\">\r\n        <h1>Lista de Productos</h1>\r\n      </div>\r\n      <div class=\"list-container\">\r\n        <ion-item *ngFor=\"let product of products\" detail (click)=\"navigate(product.id)\">\r\n          <ion-label>\r\n            <h2>{{product.name}}</h2>\r\n            <p>Presentación: {{product.presentation}}</p>\r\n            <p>Peso Esperado: {{product.weightTarget}} | Máximo: {{product.weightMax}} | Mínimo: {{product.weightMin}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"newProduct()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add-circle\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_products-list_products-list_module_ts.js.map