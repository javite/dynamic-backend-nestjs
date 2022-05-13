(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["default-src_app_components_po-detail_po-detail_component_module_ts"],{

/***/ 4562:
/*!********************************************************************!*\
  !*** ./src/app/components/po-detail/po-detail.component.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoDetailModule": () => (/* binding */ PoDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _po_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./po-detail.component */ 3019);
/* harmony import */ var _product_detail_product_detail_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../product-detail/product-detail.component.module */ 542);







let PoDetailModule = class PoDetailModule {
};
PoDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _product_detail_product_detail_component_module__WEBPACK_IMPORTED_MODULE_1__.ProductDetailModule
        ],
        declarations: [
            _po_detail_component__WEBPACK_IMPORTED_MODULE_0__.PoDetailComponent
        ],
        exports: [
            _po_detail_component__WEBPACK_IMPORTED_MODULE_0__.PoDetailComponent,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ]
    })
], PoDetailModule);



/***/ }),

/***/ 3019:
/*!*************************************************************!*\
  !*** ./src/app/components/po-detail/po-detail.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoDetailComponent": () => (/* binding */ PoDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_po_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./po-detail.component.html */ 6146);
/* harmony import */ var _po_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./po-detail.component.scss */ 8797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/auth-constants */ 4091);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);






// import {trigger,state,style,animate,transition} from '@angular/animations';



let PoDetailComponent = class PoDetailComponent {
    constructor(router, httpClient, navCtrl, storageService) {
        this.router = router;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.title = "Orden de trabajo";
        this.isOpen = false;
        this.productSelected = false;
        this.editProd = false;
        this.enableSelectProduct = false;
        this.invalidInput = {
            name: '',
            GTIN: '',
            internalCode: '',
            presentation: '',
            weightMax: '',
            weightMin: ''
        };
    }
    ngOnInit() {
        this.storageService.get(src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.USER)
            .then(res => {
            this.user = res.user;
            this.token = res.accessToken;
        })
            .catch(err => console.log("No hay usuario logueado"));
        this.productionDate = this.po.batches[0].productionDate;
        this.expirationDate = this.po.batches[0].expirationDate;
        if (this.new) {
            this.isOpen = true; // para que no aparezca el boton de guardar
            this.enableSelectProduct = true;
        }
        else {
            this.productSelected = true;
            if (this.po != undefined && this.po.state === 0) {
                this.enableSelectProduct = true;
            }
            else {
                this.enableSelectProduct = false;
            }
        }
    }
    ionViewWillEnter() {
        console.log("entert");
    }
    modify() {
        this.router.navigate([`product-order-detail/${this.po.id}`]);
    }
    newProduct() {
        this.router.navigate(['product-detail']);
    }
    cancel() {
        this.back();
    }
    delete() {
        this.httpClient.deletePO(this.po.id, this.token)
            .subscribe(res => {
            console.log(res);
            this.back();
        }, error => console.log(error));
    }
    load() {
        this.httpClient.updatePO(this.po, this.token)
            .subscribe(res => {
            this.httpClient.openPO(this.po.id, this.token).subscribe(res => {
                console.log(res);
                this.home();
            }, error => console.log(error));
        }, error => console.log(error));
    }
    home() {
        this.router.navigate([`home`]);
    }
    back() {
        this.navCtrl.back();
    }
    save() {
        if (!this.new) {
            console.log(this.po);
            let updatedPo = Object.assign({}, this.po);
            delete updatedPo["createdAt"];
            delete updatedPo["updatedAt"];
            this.httpClient.updatePO(updatedPo, this.token)
                .subscribe(res => {
                console.log(res);
                this.back();
            }, error => console.log(error));
        }
        else {
            console.log(this.po);
            let newPo = Object.assign({}, this.po);
            newPo["productId"] = this.productId;
            newPo["batch"] = this.po.batches[0];
            delete newPo["products"];
            delete newPo["batches"];
            delete newPo["createdAt"];
            delete newPo["updatedAt"];
            newPo.userId = this.user.id;
            console.log(newPo);
            this.httpClient.createPO(newPo, this.token)
                .subscribe(res => {
                console.log(res);
                this.back();
            }, error => console.log(error));
        }
    }
    close() {
        this.httpClient.closePO(this.po.id, this.token)
            .subscribe(res => {
            console.log(res);
            this.home();
        }, error => console.log(error));
    }
    searchProducts() {
        this.httpClient.getProducts()
            .subscribe(products => {
            console.log(products);
            this.products = products;
            this.productSelected = false;
        }, error => console.log(error));
    }
    selectProduct(productId) {
        this.productSelected = true;
        this.productId = productId;
        this.po.products[0] = this.products.find(product => product.id == productId);
        console.log(productId);
    }
    dateChanged(event, num) {
        if (num === 0) {
            this.po.batches[0].productionDate = event.detail.value;
        }
        else {
            this.po.batches[0].expirationDate = event.detail.value;
        }
    }
};
PoDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService }
];
PoDetailComponent.propDecorators = {
    po: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    new: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
PoDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-po-detail',
        template: _raw_loader_po_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_po_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PoDetailComponent);



/***/ }),

/***/ 542:
/*!******************************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailModule": () => (/* binding */ ProductDetailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.component */ 2612);






let ProductDetailModule = class ProductDetailModule {
};
ProductDetailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ],
        declarations: [
            _product_detail_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailComponent
        ],
        exports: [
            _product_detail_component__WEBPACK_IMPORTED_MODULE_0__.ProductDetailComponent,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule
        ]
    })
], ProductDetailModule);



/***/ }),

/***/ 2612:
/*!***********************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-detail.component.html */ 8173);
/* harmony import */ var _product_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.component.scss */ 944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);







let ProductDetailComponent = class ProductDetailComponent {
    constructor(router, httpClient, navCtrl) {
        this.router = router;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    clearInvalidInput(input) {
        this.invalidInput[input] = '';
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
ProductDetailComponent.propDecorators = {
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    edit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    invalidInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ProductDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailComponent);



/***/ }),

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

/***/ 8797:
/*!***************************************************************!*\
  !*** ./src/app/components/po-detail/po-detail.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".unit {\n  text-align: end;\n}\n\n.flex-align-items-end {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.card {\n  min-height: 600px;\n  --background: transparent;\n  --border-color: rgb(134, 134, 134);\n  border-radius: 40px;\n  margin-bottom: 7%;\n  background-color: rgba(101, 101, 102, 0.432);\n}\n\n.animation {\n  animation: popIn 0.4s 0.1s both ease-in;\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.4);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n\nion-item {\n  --background: transparent;\n  --border-color: rgb(134, 134, 134);\n}\n\nion-input, ion-textarea {\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);\n}\n\nh1 {\n  text-align: center;\n}\n\n.list {\n  background-color: rgba(255, 255, 255, 0);\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBQUFKOztBQUdBO0VBRUksdUNBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0VBRE47RUFHRTtJQUNJLFVBQUE7SUFDQSxlQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esa0NBQUE7QUFGSjs7QUFLQTtFQUNJLG9EQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksd0NBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoicG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuaXR7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5mbGV4LWFsaWduLWl0ZW1zLWVuZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY2FyZHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2IoMTM0LCAxMzQsIDEzNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTAxLCAxMDIsIDAuNDMyKTtcclxufVxyXG5cclxuLmFuaW1hdGlvbntcclxuICAgIC8vIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uOiBwb3BJbiAwLjRzIDAuMXMgYm90aCBlYXNlLWluO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBvcEluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24tdGV4dGFyZWEge1xyXG4gICAgY29sb3I6IHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC40KTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ 944:
/*!*************************************************************************!*\
  !*** ./src/app/components/product-detail/product-detail.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: transparent;\n  --border-color: rgb(134, 134, 134);\n}\n\nion-input {\n  color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);\n}\n\n.invalid-input {\n  color: #f35151;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 3px;\n  border-radius: 5px;\n  font-size: smaller;\n  margin-left: 5px auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUNBO0VBQ0ksb0RBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjQpO1xyXG59XHJcblxyXG4uaW52YWxpZC1pbnB1dCB7XHJcbiAgICBjb2xvcjogcmdiKDI0MywgODEsIDgxKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHggYXV0bztcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG4vLyAud2Fybi1pbnB1dCB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuLy8gfSJdfQ== */");

/***/ }),

/***/ 6146:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/po-detail/po-detail.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"card\">\r\n  <ion-card-content >\r\n    <h2 *ngIf=\"!po\">No hay Orden de trabajo en proceso</h2>\r\n    <ion-grid *ngIf=\"po\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <h1> {{title}} </h1>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" size-sm>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Nombre:*</ion-label>\r\n            <ion-input type=\"text\" [(ngModel)]=\"po.name\" [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\" size-sm>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Código:</ion-label>\r\n            <ion-input readonly type=\"text\" [(ngModel)]=\"po.code\" [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item >\r\n            <ion-label position=\"stacked\">Descripción:</ion-label>\r\n            <ion-textarea  type=\"text\" [(ngModel)]=\"po.description\" [readonly]=\"!edit\"></ion-textarea>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col *ngIf=\"enableSelectProduct\">\r\n            <h1 class=\"invisible\"></h1>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-sm>\r\n            <h1>Producto</h1>\r\n          </ion-col>\r\n          <ion-col class=\"flex-align-items-end\"  *ngIf=\"enableSelectProduct\">\r\n            <ion-button expand=\"\" fill=\"solid\" size=\"small\" color=\"medium\"  (click)=\"searchProducts()\">\r\n              <ion-icon name=\"search-outline\" slot=\"start\"></ion-icon>\r\n              Buscar\r\n            </ion-button>\r\n            <ion-button expand=\"\" fill=\"solid\" size=\"small\" color=\"dark\"  (click)=\"newProduct()\">\r\n              <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n              Nuevo\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"!productSelected\" >\r\n          <ion-col class=\"ion-no-padding\">\r\n            <ion-list class=\"list\" lines=\"full\">\r\n              <ion-item *ngFor=\"let product of products\"  >\r\n                <ion-label slot=\"start\">\r\n                  <h2>{{product.name}}</h2>\r\n                  <h3>Presentación: {{product.presentation}}</h3>\r\n                  <p>Peso: {{product.weightTarget}} g | Máximo: {{product.weightMax}} g | Mínimo: {{product.weightMin}} g</p>\r\n                </ion-label>\r\n                <ion-button color=\"dark\" slot=\"end\" (click)=\"selectProduct(product.id)\">Seleccionar</ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <app-product-detail *ngIf=\"productSelected\" [product]=\"po.products[0]\" [edit]=\"false\" [invalidInput]=\"invalidInput\" ></app-product-detail>\r\n      </ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <h1> Lote </h1>\r\n        </ion-col>\r\n        <ion-col size=\"12\"  size-sm>\r\n          <ion-item >\r\n            <ion-label position=\"stacked\">Nombre:*</ion-label>\r\n            <ion-input  type=\"text\"  [(ngModel)]=\"po.batches[0].name\" [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\"  size-sm>\r\n          <ion-item >\r\n            <ion-label position=\"stacked\">Fecha de fabricación:</ion-label>\r\n            <ion-input type=\"date\" [(ngModel)]=\"po.batches[0].productionDate\"  [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\"  size-sm>\r\n          <ion-item >\r\n            <ion-label position=\"stacked\">Fecha de vencimiento:</ion-label>\r\n            <ion-input type=\"date\" [(ngModel)]=\"po.batches[0].expirationDate\"  [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\"  size-sm>\r\n          <ion-item >\r\n            <ion-label position=\"stacked\">Tamaño del lote:</ion-label>\r\n            <ion-input  type=\"number\" [(ngModel)]=\"po.batches[0].expectedSize\" [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\"  size-sm *ngIf=\"po.state == 2\">\r\n          <ion-item >\r\n            <ion-label position=\"stacked\" >Aceptados:</ion-label>\r\n            <ion-input  type=\"number\"[(ngModel)]=\"po.batches[0].okTotal\" [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"12\"  size-sm *ngIf=\"po.state == 2\">\r\n          <ion-item >\r\n            <ion-label position=\"stacked\" >Rechazados:</ion-label>\r\n            <ion-input  type=\"number\" [(ngModel)]=\"po.batches[0].nokTotal\" [readonly]=\"!edit\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-end\" *ngIf=\"edit\">\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"danger\" shape=\"round\" (click)=\"delete()\" *ngIf=\"po.state == 0 && !new\">Eliminar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"primary\" shape=\"round\" (click)=\"load()\" *ngIf=\"!isOpen\">Cargar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"medium\" shape=\"round\" (click)=\"cancel()\">Cancelar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"dark\" shape=\"round\" (click)=\"save()\">Guardar</ion-button>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-end\" *ngIf=\"!edit\">\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"medium\" shape=\"round\" *ngIf=\"po.state == 1\" (click)=\"close()\">Finalizar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"dark\" shape=\"round\" *ngIf=\"po.state == 1\" (click)=\"modify()\">Modificar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"dark\" shape=\"round\" *ngIf=\"po.state == 2\" >Guardar reporte</ion-button>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ 8173:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-detail/product-detail.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\r\n  <ion-row >   \r\n    <ion-col size=\"12\"  size-sm >\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nombre:</ion-label>\r\n        <ion-input  type=\"text\" [(ngModel)]=\"product.name\" [readonly]=\"!edit\" (ngModelChange)=\"clearInvalidInput('name')\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"invalidInput.name !== ''\" class=\"warn-input\" lines=\"none\"> <span class=\"invalid-input\"> {{invalidInput.name}} </span> </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Presentacion:</ion-label>\r\n        <ion-input  type=\"text\" [(ngModel)]=\"product.presentation\" [readonly]=\"!edit\" (ngModelChange)=\"clearInvalidInput('presentation')\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"invalidInput.presentation !== ''\" class=\"warn-input\" lines=\"none\"> <span class=\"invalid-input\"> {{invalidInput.presentation}} </span> </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Código:</ion-label>\r\n        <ion-input  type=\"text\" [(ngModel)]=\"product.internalCode\" [readonly]=\"!edit\" (ngModelChange)=\"clearInvalidInput('internalCode')\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"invalidInput.internalCode !== ''\" class=\"warn-input\" lines=\"none\"> <span class=\"invalid-input\"> {{invalidInput.internalCode}} </span> </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Peso promedio:</ion-label>\r\n        <ion-input  type=\"number\" [(ngModel)]=\"product.weightTarget\" [readonly]=\"!edit\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Peso máximo:</ion-label>\r\n        <ion-input  type=\"number\" [(ngModel)]=\"product.weightMax\" [readonly]=\"!edit\" (ngModelChange)=\"clearInvalidInput('weightMax')\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"invalidInput.weightMax !== ''\" class=\"warn-input\" lines=\"none\"> <span class=\"invalid-input\"> {{invalidInput.weightMax}} </span> </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Peso mínimo:</ion-label>\r\n        <ion-input  type=\"number\" [(ngModel)]=\"product.weightMin\" [readonly]=\"!edit\" (ngModelChange)=\"clearInvalidInput('weightMin')\"></ion-input>\r\n        <ion-item *ngIf=\"invalidInput.weightMin !== ''\" class=\"warn-input\" lines=\"none\"> <span class=\"invalid-input\"> {{invalidInput.weightMin}} </span> </ion-item>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Velocidad:</ion-label>\r\n        <ion-input type=\"number\" [(ngModel)]=\"product.speed\" [readonly]=\"!edit\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">GTIN:</ion-label>\r\n        <ion-input  type=\"text\" [(ngModel)]=\"product.GTIN\" [readonly]=\"!edit\" (ngModelChange)=\"clearInvalidInput('GTIN')\"></ion-input>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"invalidInput.GTIN !== ''\" class=\"warn-input\" lines=\"none\"> <span class=\"invalid-input\"> {{invalidInput.GTIN}} </span> </ion-item>\r\n    </ion-col>\r\n    <ion-col size=\"12\"  size-sm>\r\n      <ion-item >\r\n        <ion-label position=\"stacked\">Ancho:</ion-label>\r\n        <ion-input  type=\"number\" [(ngModel)]=\"product.width\" [readonly]=\"!edit\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_po-detail_po-detail_component_module_ts.js.map