(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_user-detail_user-detail_module_ts"],{

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

/***/ 5867:
/*!*****************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailPageRoutingModule": () => (/* binding */ UserDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-detail.page */ 7471);




const routes = [
    {
        path: '',
        component: _user_detail_page__WEBPACK_IMPORTED_MODULE_0__.UserDetailPage
    }
];
let UserDetailPageRoutingModule = class UserDetailPageRoutingModule {
};
UserDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserDetailPageRoutingModule);



/***/ }),

/***/ 1750:
/*!*********************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailPageModule": () => (/* binding */ UserDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-detail-routing.module */ 5867);
/* harmony import */ var _user_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-detail.page */ 7471);







let UserDetailPageModule = class UserDetailPageModule {
};
UserDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserDetailPageRoutingModule
        ],
        declarations: [_user_detail_page__WEBPACK_IMPORTED_MODULE_1__.UserDetailPage]
    })
], UserDetailPageModule);



/***/ }),

/***/ 7471:
/*!*******************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailPage": () => (/* binding */ UserDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_user_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-detail.page.html */ 1622);
/* harmony import */ var _user_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-detail.page.scss */ 6210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configuration/auth-constants */ 4091);
/* harmony import */ var src_app_services_form_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/form-validation.service */ 5181);










let UserDetailPage = class UserDetailPage {
    constructor(router, activatedRoute, toastController, httpClient, storageService, alertController, formValidations) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.alertController = alertController;
        this.formValidations = formValidations;
        this.data_loaded = false;
    }
    ngOnInit() {
        this.storageService.get(src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_4__.AuthConstants.USER).then(res => {
            console.log(res);
            this.loggedUser = res.user;
            this.token = res.accessToken;
        });
        this.confirPass = '';
        this.invalidInput = {
            user: '',
            password: '',
            confirPass: '',
            firstName: '',
            lastName: ''
        };
        this.userId = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.userId === 'new') {
            this.newUser = true;
            this.user = {
                firstName: '',
                lastName: '',
                user: '',
                password: '',
                level: 1,
                groupLevel: 0,
                passExpirationDate: new Date(),
                active: true,
                erased: false,
            };
        }
        else {
            this.newUser = false;
        }
    }
    ionViewWillEnter() {
        if (this.newUser === false) {
            this.httpClient.getUser(this.userId, this.token)
                .subscribe(user => {
                console.log(user);
                this.user = user;
                this.data_loaded = true;
                this.user.password = '***************';
            }, error => this.showAlert(error));
        }
    }
    // LOCAL PARA CADA FORM
    trimInputs() {
        this.user.user.trim();
        this.user.firstName.trim();
        this.user.lastName.trim();
        this.user.password.trim();
    }
    saveUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // SACA LOS ESPACIOS EN BLANCO DE LAS PROPIEDADES DEL USUARIO ( A TODES )
            this.trimInputs();
            // VALIDA LOS ELEMENTOS PASADOS COMO STATE CON LAS REGLAS DE VALIDACION APLICADAS
            let validated = {};
            if (this.newUser === true) {
                validated = this.formValidations.validate(Object.assign(Object.assign({}, this.user), { confirPass: this.confirPass }), [
                    { param1: 'user', param2: 2, val: ['min-length'] },
                    { param1: 'firstName', param2: 2, val: ['min-length'] },
                    { param1: 'lastName', param2: 2, val: ['min-length'] },
                    { param1: 'password', val: ['empty', 'pass'] },
                    { param1: 'confirPass', param2: 'password', val: ['empty', 'are-equal'] }
                ]);
            }
            else {
                validated = this.formValidations.validate(Object.assign(Object.assign({}, this.user), { confirPass: this.confirPass }), [
                    { param1: 'user', param2: 2, val: ['min-length'] },
                    { param1: 'firstName', param2: 2, val: ['min-length'] },
                    { param1: 'lastName', param2: 2, val: ['min-length'] },
                ]);
            }
            console.log(validated);
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
                    message: `¿Confirma que desea ${this.newUser ? 'crear' : 'modificar'} el usuario ${this.user.firstName} ${this.user.lastName}?`,
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => { }
                        },
                        {
                            text: 'Si',
                            handler: () => {
                                if (this.newUser === true) {
                                    this.httpClient.createUser(this.user, this.token)
                                        .subscribe(res => {
                                        this.goBackToList();
                                    }, error => this.showAlert(error));
                                }
                                else {
                                    this.httpClient.updateUser(this.user, this.token)
                                        .subscribe(res => {
                                        this.goBackToList();
                                    }, error => this.showAlert(error));
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    //   else {
    //     this.httpClient.updateUser(this.user, this.token)
    //       .subscribe( res => {
    //         this.goBackToList();
    //       }, error => this.showAlert(error));
    //     }
    // };
    deleteUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención!',
                message: `¿Confirma que desea borrar al usuario ${this.user.firstName} ${this.user.lastName}?`,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => { }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.httpClient.deleteUser(+this.userId, this.token)
                                .subscribe(res => {
                                this.goBackToList();
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
    ;
    clearInvalidInput(field) {
        this.invalidInput[field] = '';
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
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
    ;
    goBackToList() {
        this.router.navigate(['/users']);
    }
};
UserDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_form_validation_service__WEBPACK_IMPORTED_MODULE_5__.FormValidationService }
];
UserDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-user-detail',
        template: _raw_loader_user_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserDetailPage);

;


/***/ }),

/***/ 6210:
/*!*********************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background-po {\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n  overflow: scroll;\n}\n\n.user-container {\n  margin: 2% auto;\n  background-color: rgba(101, 101, 102, 0.432);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 95%;\n  max-width: 500px;\n  padding: 35px;\n  border-radius: 40px;\n}\n\n.data {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-size: 18px;\n  border-bottom: 1px solid #80808087;\n}\n\n.button-submit {\n  margin-top: 20px;\n}\n\n.avatar {\n  height: auto;\n  width: 121px;\n  margin-bottom: 15px;\n}\n\n.right {\n  text-align: end;\n}\n\nion-item {\n  --backgrouond: transparent;\n}\n\n.buttons-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.invalid-input {\n  color: #f35151;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 3px;\n  border-radius: 5px;\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esd0dBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0FBSUo7O0FBREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSUoiLCJmaWxlIjoidXNlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtcG97XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDExLCA1NCwgMTI5ICk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMTEsIDU0LCAxMjksIDY1JSkgMCUsIHJnYig3LCAxOCwgMzIpIDM1JSwgcmdiKDQsIDE2LCAzNiwgODUlKSAxMDAlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnVzZXItY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAyLCAwLjQzMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4uZGF0YXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA4NztcclxufVxyXG4uYnV0dG9uLXN1Ym1pdHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTIxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5yaWdodHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VvbmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWlucHV0IHtcclxuICAgIGNvbG9yOiByZ2IoMjQzLCA4MSwgODEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59Il19 */");

/***/ }),

/***/ 1622:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-detail/user-detail.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Usuario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"background-po\" >\r\n      <div class=\"user-container\" *ngIf=\"user\">\r\n        <ion-avatar class=\"avatar\">\r\n          <img src=\"assets/avatar.svg\">\r\n        </ion-avatar>\r\n        <div class=\"data\">\r\n          <div class=\"user\">Usuario: </div>\r\n          <ion-input class=\"right ion-padding\" type=\"text\" [(ngModel)]=\"user.user\" (ngModelChange)=\"clearInvalidInput('user')\"></ion-input>\r\n        </div>\r\n        <p *ngIf=\"invalidInput.user !== ''\" class=\"invalid-input\"> {{invalidInput.user}} </p>\r\n        <div class=\"data\">\r\n          <ion-label>Nombre: </ion-label>\r\n          <ion-input class=\"right ion-padding\" type=\"text\" [(ngModel)]=\"user.firstName\" (ngModelChange)=\"clearInvalidInput('firstName')\" ></ion-input>\r\n        </div>\r\n        <p *ngIf=\"invalidInput.firstName !== ''\" class=\"invalid-input\"> {{invalidInput.firstName}} </p>\r\n        <div class=\"data\">\r\n          <ion-label>Apellido: </ion-label>\r\n          <ion-input class=\"right ion-padding\" type=\"text\" [(ngModel)]=\"user.lastName\" (ngModelChange)=\"clearInvalidInput('lastName')\" ></ion-input>\r\n        </div>\r\n        <p *ngIf=\"invalidInput.lastName !== ''\" class=\"invalid-input\"> {{invalidInput.lastName}} </p>\r\n        <div class=\"data\">\r\n          <ion-label>Contraseña: </ion-label>\r\n          <ion-input class=\"right ion-padding\" type=\"password\" [(ngModel)]=\"user.password\" (ngModelChange)=\"clearInvalidInput('password')\"></ion-input>\r\n        </div>\r\n        <p *ngIf=\"invalidInput.password !== ''\" class=\"invalid-input\"> {{invalidInput.password}} </p>\r\n        <div *ngIf=\"userId === 'new'\" class=\"data\">\r\n          <ion-label>Confirmar Contraseña: </ion-label>\r\n          <ion-input class=\"right ion-padding\" type=\"password\" [(ngModel)]=\"confirPass\" (ngModelChange)=\"clearInvalidInput('confirPass')\" ></ion-input>\r\n        </div>\r\n        <p *ngIf=\"invalidInput.confirPass !== ''\" class=\"invalid-input\"> {{invalidInput.confirPass}} </p>\r\n        <div class=\"data\">\r\n          <ion-label>Nivel: </ion-label>\r\n          <ion-input class=\"right ion-padding\" type=\"text\" [(ngModel)]=\"user.level\"></ion-input>\r\n        </div>\r\n        <div class=\"data\">\r\n          <ion-label>Activo: </ion-label>\r\n          <ion-toggle class=\"ion-padding\" [(ngModel)]=\"user.active\"></ion-toggle>\r\n        </div>\r\n        <div class=\"buttons-container\">\r\n          <div class=\"button-submit\">\r\n            <ion-button *ngIf=\"newUser\" expand=\"block\" fill=\"solid\" shape=\"round\" color=\"dark\" (click)=\"saveUser()\">Guardar</ion-button>\r\n            <ion-button *ngIf=\"!newUser\" expand=\"block\" fill=\"solid\" shape=\"round\" color=\"dark\" (click)=\"saveUser()\">Modificar</ion-button>\r\n          </div>\r\n          <div *ngIf=\"!newUser\" class=\"button-submit\">\r\n            <ion-button expand=\"block\" fill=\"solid\" shape=\"round\" color=\"medium\" (click)=\"deleteUser()\">Eliminar</ion-button>\r\n          </div>\r\n        </div>\r\n      </div >\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-detail_user-detail_module_ts.js.map