(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_product-orders_product-orders_module_ts"],{

/***/ 1107:
/*!*********************************************************!*\
  !*** ./src/app/components/po-list/po-list.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoListComponent": () => (/* binding */ PoListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_po_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./po-list.component.html */ 7822);
/* harmony import */ var _po_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./po-list.component.scss */ 9135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let PoListComponent = class PoListComponent {
    constructor() { }
    ngOnInit() {
        console.log("Pos: ", this.state, this.pos);
        if (this.state == 0) {
            this.message = "pendientes";
        }
        else if (this.state == 2) {
            this.message = "cerradas";
        }
    }
    nameIcon() {
        if (this.state == 0) {
            return 'checkmark-circle-outline';
        }
        else if (this.state == 2) {
            return 'close-circle-outline';
        }
    }
};
PoListComponent.ctorParameters = () => [];
PoListComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PoListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-po-list',
        template: _raw_loader_po_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_po_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PoListComponent);



/***/ }),

/***/ 2244:
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-orders/product-orders-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOrdersPageRoutingModule": () => (/* binding */ ProductOrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _product_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-orders.page */ 4820);




const routes = [
    {
        path: '',
        component: _product_orders_page__WEBPACK_IMPORTED_MODULE_0__.ProductOrdersPage
    }
];
let ProductOrdersPageRoutingModule = class ProductOrdersPageRoutingModule {
};
ProductOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductOrdersPageRoutingModule);



/***/ }),

/***/ 8120:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-orders/product-orders.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOrdersPageModule": () => (/* binding */ ProductOrdersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-orders-routing.module */ 2244);
/* harmony import */ var _product_orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-orders.page */ 4820);
/* harmony import */ var _components_po_list_po_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/po-list/po-list.component */ 1107);
/* harmony import */ var _components_po_detail_po_detail_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/po-detail/po-detail.component.module */ 4562);









let ProductOrdersPageModule = class ProductOrdersPageModule {
};
ProductOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_po_detail_po_detail_component_module__WEBPACK_IMPORTED_MODULE_3__.PoDetailModule,
            _product_orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductOrdersPageRoutingModule
        ],
        declarations: [_product_orders_page__WEBPACK_IMPORTED_MODULE_1__.ProductOrdersPage, _components_po_list_po_list_component__WEBPACK_IMPORTED_MODULE_2__.PoListComponent]
    })
], ProductOrdersPageModule);



/***/ }),

/***/ 4820:
/*!*************************************************************!*\
  !*** ./src/app/pages/product-orders/product-orders.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOrdersPage": () => (/* binding */ ProductOrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-orders.page.html */ 9238);
/* harmony import */ var _product_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-orders.page.scss */ 9691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);







let ProductOrdersPage = class ProductOrdersPage {
    constructor(router, toastController, httpClient, alertController, loadingController) {
        this.router = router;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.ops = {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            centeredSlidesBounds: true,
            speed: 500,
            freeMode: false,
            freeModeSticky: true,
            preventClicks: true,
        };
        this.data_loaded = false;
        this.segment = 'process';
        this.new = false;
    }
    ngOnInit() {
        this.presentLoading();
    }
    ionViewWillEnter() {
        this.httpClient.getPOs()
            .subscribe(po => {
            console.log(po);
            this.po = po.filter(po => po.state === 1)[0];
            this.pos0 = po.filter(po => po.state === 0);
            this.pos2 = po.filter(po => po.state === 2);
            console.log(this.po, this.pos0, this.pos2);
            this.data_loaded = true;
            this.stopLoading();
        }, error => {
            console.log(error);
            this.stopLoading();
            this.showAlertOneButton(error);
        });
    }
    segmentChanged(event) {
        let key = event.detail.value;
        this.segment = key;
        switch (key) {
            case 'process':
                this.slider.slideTo(0);
                break;
            case 'pending':
                this.slider.slideTo(1);
                break;
            case 'closed':
                this.slider.slideTo(2);
                break;
            default:
                break;
        }
    }
    newPO() {
        this.router.navigate(['product-order-detail/']);
    }
    slideChanged() {
        this.slider.getActiveIndex().then(data => {
            switch (data) {
                case 0:
                    this.segment = 'process';
                    break;
                case 1:
                    this.segment = 'pending';
                    break;
                case 2:
                    this.segment = 'closed';
                    break;
                default:
                    break;
            }
        });
    }
    slideTouched() {
        this.slider.getSwiper().then((swiper) => {
            this.slider.slideTo(swiper.clickedIndex);
        });
    }
    showAlertOneButton(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención!',
                message: msg,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Aguarde por favor',
                duration: 3000
            });
            yield this.loading.present();
            // const { role, data } = await loading.onDidDismiss();
        });
    }
    stopLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.dismiss();
        });
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
ProductOrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
ProductOrdersPage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slider', { static: false },] }]
};
ProductOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-orders',
        template: _raw_loader_product_orders_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductOrdersPage);



/***/ }),

/***/ 9135:
/*!***********************************************************!*\
  !*** ./src/app/components/po-list/po-list.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  min-height: 600px;\n  padding: 35px;\n  padding-top: 10px;\n  border-radius: 40px;\n  background-color: rgba(101, 101, 102, 0.432);\n}\n\nion-item {\n  --background: transparent;\n  --border-color: rgb(134, 134, 134);\n}\n\n.sc-ion-label-ios-s > p {\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFBSjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFJQTtFQUNJLG9EQUFBO0FBREoiLCJmaWxlIjoicG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAxLCAxMDEsIDEwMiwgMC40MzIpO1xyXG59XHJcblxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMTM0LCAxMzQsIDEzNCk7XHJcbn1cclxuXHJcbi5zYy1pb24tbGFiZWwtaW9zLXM+cCB7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjQpO1xyXG59Il19 */");

/***/ }),

/***/ 9691:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-orders/product-orders.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".segment-container {\n  position: sticky;\n  top: 0;\n  z-index: 10000;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  border-bottom: 1px solid #666666e8;\n  background-color: black;\n  box-shadow: 45px 1px 25px black;\n}\n\n.segment {\n  width: 60%;\n  margin: 0 auto;\n}\n\n.card {\n  width: 95%;\n}\n\n.new-ot {\n  background-color: gray;\n}\n\n.background-po {\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n}\n\n.width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFHQTtFQUNJLHNCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHdHQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicHJvZHVjdC1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlZ21lbnQtY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDowO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjY2NmU4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiA0NXB4IDFweCAyNXB4IGJsYWNrO1xyXG59XHJcblxyXG4uc2VnbWVudHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA5NzBweDtcclxufVxyXG5cclxuLm5ldy1vdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuLmJhY2tncm91bmQtcG97XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDExLCA1NCwgMTI5ICk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMTEsIDU0LCAxMjksIDY1JSkgMCUsIHJnYig3LCAxOCwgMzIpIDM1JSwgcmdiKDQsIDE2LCAzNiwgODUlKSAxMDAlKTtcclxufVxyXG5cclxuLndpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 7822:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/po-list/po-list.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"card\">\r\n  <ion-card-content >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <h1 *ngIf=\"pos?.length != 0\">\r\n           {{title}}\r\n          </h1>\r\n          <h1 *ngIf=\"pos?.length == 0\">\r\n            No se encontraron órdenes {{message}}\r\n           </h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" >\r\n          <ion-item *ngFor=\"let po of pos\" [routerLink]=\"'/product-order-detail/' + po.id\">\r\n            <ion-avatar slot=\"start\">\r\n              <ion-icon [name]=\"nameIcon()\" size=\"large\"></ion-icon>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2>{{po.name}}</h2>\r\n              <p>Producto: {{po.products[0].name}}</p>\r\n              <p>Lote: {{po.batches[0].name}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ 9238:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-orders/product-orders.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ordenes de trabajo</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"segment-container\">\r\n    <div class=\"segment\">\r\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\r\n        <ion-segment-button value=\"process\">\r\n          <ion-label>En proceso</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"pending\">\r\n          <ion-label>Pendientes</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"closed\">\r\n          <ion-label>Finalizadas</ion-label>\r\n        </ion-segment-button>\r\n\r\n      </ion-segment>\r\n    </div>\r\n  </div>\r\n  <div class=\"background-po\" >\r\n    <ion-slides [options]=\"ops\" #slider (ionSlideDidChange)=\"slideChanged()\" (ionSlideTap)=\"slideTouched()\" pager=\"false\" class=\"width\">\r\n      <ion-slide>\r\n        <div class=\"card\">\r\n          <app-po-detail [po]=\"po\" [edit]=\"false\" *ngIf=\"data_loaded\" [new]=\"false\"></app-po-detail>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"card\" >\r\n          <app-po-list *ngIf=\"data_loaded\" title=\"Ordenes de trabajo pendientes\" [pos]=\"pos0\" [state]=\"0\"></app-po-list>\r\n        </div>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <div class=\"card\" >\r\n          <app-po-list *ngIf=\"data_loaded\" title=\"Ordenes de trabajo cerradas\" [pos]=\"pos2\" [state]=\"2\"></app-po-list>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"newPO()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add-circle\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n \r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-orders_product-orders_module_ts.js.map