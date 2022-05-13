(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_product-detail_product-detail_module_ts"],{

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

/***/ 9823:
/*!***********************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageRoutingModule": () => (/* binding */ ProductDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 6346);




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ 8848:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageModule": () => (/* binding */ ProductDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail-routing.module */ 9823);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page */ 6346);
/* harmony import */ var _components_product_detail_product_detail_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/product-detail/product-detail.component.module */ 542);








let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_product_detail_product_detail_component_module__WEBPACK_IMPORTED_MODULE_2__.ProductDetailModule,
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPageRoutingModule
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailPage]
    })
], ProductDetailPageModule);



/***/ }),

/***/ 6346:
/*!*************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPage": () => (/* binding */ ProductDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-detail.page.html */ 1586);
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss */ 3796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/auth-constants */ 4091);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var src_app_services_form_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/form-validation.service */ 5181);










let ProductDetailPage = class ProductDetailPage {
    constructor(router, activatedRoute, httpClient, storageService, navCtrl, alertController, formValidations) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.formValidations = formValidations;
        this.new = false;
        this.product_init = {
            id: 0,
            name: "",
            weightMax: 0,
            weightMin: 0,
            weightTarget: 0,
            GTIN: "",
            internalCode: "",
            presentation: "",
            speed: 0,
            state: 0
        };
    }
    ngOnInit() {
        this.invalidInput = {
            name: '',
            GTIN: '',
            internalCode: '',
            presentation: '',
            weightMax: '',
            weightMin: ''
        };
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.id);
        if (this.id == null) {
            this.new = true;
        }
        console.log("new:", this.new);
        this.storageService.get(src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.USER).then(res => {
            console.log("user:", res);
            this.user = res.user;
            this.token = res.accessToken;
        });
        if (!this.new) {
            this.httpClient.getProduct(this.id)
                .subscribe(product => {
                console.log(product);
                this.product = product;
            }, error => console.log(error));
        }
        else {
            this.product = this.product_init;
        }
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let product_temp = this.product;
            delete product_temp.batches;
            delete product_temp.updatedAt;
            // VALIDA LOS ELEMENTOS PASADOS COMO STATE CON LAS REGLAS DE VALIDACION APLICADAS
            let validated = {};
            validated = this.formValidations.validate(this.product, [
                { param1: 'name', val: ['empty'] },
                { param1: 'GTIN', param2: 14, val: ['empty', 'only-nums', 'min-length'] },
                { param1: 'internalCode', val: ['empty'] },
                { param1: 'weightMax', param2: 'weightMin', val: ['empty', 'higher'] },
                { param1: 'weightMin', val: ['empty'] },
                { param1: 'presentation', val: ['empty'] }
            ]);
            this.invalidInput = Object.assign(Object.assign({}, this.invalidInput), validated);
            // CORROBORA POR ALGUN ELEMENTO CON STRING DE ERROR
            let invalid = false;
            for (let error in this.invalidInput) {
                if (this.invalidInput[error] !== '')
                    invalid = true;
            }
            if (!invalid) {
                // NO HAY ERRORES
                const alert = yield this.alertController.create({
                    header: 'Atención!',
                    message: `¿Confirma que desea ${this.new ? 'crear' : 'modificar'} el producto ${this.product.name}?`,
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => { }
                        },
                        {
                            text: 'Si',
                            handler: () => {
                                if (this.new) {
                                    this.httpClient.createProduct(this.product, this.token)
                                        .subscribe(res => {
                                        console.log(res);
                                        this.back();
                                    }),
                                        error => this.showAlert(error);
                                }
                                else {
                                    console.log(this.product);
                                    this.httpClient.updateProduct(this.product, this.token).subscribe(res => {
                                        console.log(res);
                                        this.goHome();
                                    }),
                                        error => this.showAlert(error);
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención!',
                message: `¿Confirma que desea borrar el producto ${this.product.name}?`,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.httpClient.deleteProduct(this.product.id, this.token)
                                .subscribe(res => {
                                console.log(res);
                                this.back();
                            }, error => {
                                console.log(error);
                                this.showAlert(error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    back() {
        this.navCtrl.back();
    }
    goHome() {
        this.router.navigate(['home']);
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
    showAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención!',
                message: `${msg}`,
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
};
ProductDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_form_validation_service__WEBPACK_IMPORTED_MODULE_5__.FormValidationService }
];
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-product-detail-page',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailPage);



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

/***/ 3796:
/*!***************************************************************!*\
  !*** ./src/app/pages/product-detail/product-detail.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.product-container {\n  background-color: rgba(101, 101, 102, 0.432);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 35px;\n  border-radius: 40px;\n  min-height: 600px;\n  width: 95%;\n}\n\n.buttons-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFBO0VBQ0Esd0dBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNJLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0FBQUoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogIHJnYigxMSwgNTQsIDEyOSApO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDExLCA1NCwgMTI5LCA2NSUpIDAlLCByZ2IoNywgMTgsIDMyKSAzNSUsIHJnYig0LCAxNiwgMzYsIDg1JSkgMTAwJSk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMSwgMTAxLCAxMDIsIDAuNDMyKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

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

/***/ }),

/***/ 1586:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-detail/product-detail.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Producto</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"background\" *ngIf=\"user\">\r\n    <div class=\"product-container\">\r\n      <div class=\"title\">\r\n        <h1 >Producto</h1>\r\n      </div>\r\n      <div class=\"width\">\r\n        <app-product-detail *ngIf=\"product\" [product]=\"product\" [invalidInput]=\"invalidInput\" [edit]=\"true\"></app-product-detail>\r\n      </div>\r\n      <div class=\"buttons-container\"> \r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"danger\" shape=\"round\" (click)=\"delete()\" *ngIf=\"!new\">Eliminar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"medium\" shape=\"round\" (click)=\"back()\">Cancelar</ion-button>\r\n        <ion-button expand=\"block\" fill=\"solid\" color=\"dark\" shape=\"round\" (click)=\"save()\">Guardar</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product-detail_product-detail_module_ts.js.map