(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_product-order-detail_product-order-detail_module_ts"],{

/***/ 332:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/product-order-detail/product-order-detail-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOrderDetailPageRoutingModule": () => (/* binding */ ProductOrderDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _product_order_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-order-detail.page */ 2181);




const routes = [
    {
        path: '',
        component: _product_order_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductOrderDetailPage
    }
];
let ProductOrderDetailPageRoutingModule = class ProductOrderDetailPageRoutingModule {
};
ProductOrderDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductOrderDetailPageRoutingModule);



/***/ }),

/***/ 3286:
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-order-detail/product-order-detail.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOrderDetailPageModule": () => (/* binding */ ProductOrderDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-order-detail-routing.module */ 332);
/* harmony import */ var _product_order_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-order-detail.page */ 2181);
/* harmony import */ var _components_po_detail_po_detail_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/po-detail/po-detail.component.module */ 4562);








let ProductOrderDetailPageModule = class ProductOrderDetailPageModule {
};
ProductOrderDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_po_detail_po_detail_component_module__WEBPACK_IMPORTED_MODULE_2__.PoDetailModule,
            _product_order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductOrderDetailPageRoutingModule
        ],
        declarations: [_product_order_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProductOrderDetailPage]
    })
], ProductOrderDetailPageModule);



/***/ }),

/***/ 2181:
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-order-detail/product-order-detail.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOrderDetailPage": () => (/* binding */ ProductOrderDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_order_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-order-detail.page.html */ 2407);
/* harmony import */ var _product_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-order-detail.page.scss */ 8625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);








let ProductOrderDetailPage = class ProductOrderDetailPage {
    constructor(router, toastController, activatedRoute, httpClient, storageService, navCtrl) {
        this.router = router;
        this.toastController = toastController;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.new = false;
        this.batch_init = {
            id: 0,
            name: "",
            expirationDate: '2022/01/01',
            productionDate: '2022/01/01',
            expectedSize: 0,
            finishedBatchDate: null,
            state: 0,
            okTotal: 0,
            nokTotal: 0,
            nokHigh: 0,
            nokLow: 0,
            nokOther: 0,
            productId: 0,
            deletedAt: null,
            createdAt: null,
            updatedAt: null,
        };
        this.product_init = {
            id: 0,
            name: "",
            presentation: "",
            GTIN: "",
            internalCode: "",
            weightTarget: 0,
            weightMax: 0,
            weightMin: 0,
            speed: 0,
            state: 0,
            width: 0,
            batches: [this.batch_init],
            deletedAt: null,
            createdAt: null,
            updatedAt: null,
        };
        this.po_init = {
            name: "",
            code: "",
            userId: 0,
            description: "",
            state: 0,
            products: [this.product_init],
            batches: [this.batch_init],
            deletedAt: null,
            createdAt: null,
            updatedAt: null,
        };
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id == null) {
            this.new = true;
        }
        console.log("new Po:", this.new);
        // this.storageService.get(AuthConstants.USER).then(res=>{
        //   this.user = res.user;
        // });
        if (this.new) {
            this.po = this.po_init;
            this.edit = true;
        }
        else {
            this.httpClient.getPO(this.id).subscribe(po => {
                console.log(po);
                this.po = po;
                if (this.po.state === 2) {
                    this.edit = false;
                }
                else {
                    this.edit = true;
                }
            });
        }
    }
    goBack() {
        this.router.navigate(['home']);
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
};
ProductOrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ProductOrderDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-order-detail',
        template: _raw_loader_product_order_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductOrderDetailPage);



/***/ }),

/***/ 8625:
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-order-detail/product-order-detail.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background-po {\n  height: -webkit-max-content;\n  height: max-content;\n  width: 100%;\n  position: absolute;\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n}\n\n.card {\n  margin: 0 auto;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdHQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3Qtb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLXBve1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogIHJnYigxMSwgNTQsIDEyOSApO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDExLCA1NCwgMTI5LCA2NSUpIDAlLCByZ2IoNywgMTgsIDMyKSAzNSUsIHJnYig0LCAxNiwgMzYsIDg1JSkgMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2407:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-order-detail/product-order-detail.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Orden de trabajo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"background-po\">\r\n    <div class=\"container\" *ngIf=\"po\">\r\n      <div class=\"card\">\r\n        <app-po-detail [po]=\"po\" [edit]=\"edit\" [new]=\"new\"></app-po-detail>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-order-detail_product-order-detail_module_ts.js.map