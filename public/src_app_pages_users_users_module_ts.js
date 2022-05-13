(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_users_users_module_ts"],{

/***/ 8124:
/*!*****************************************************!*\
  !*** ./src/app/pages/users/users-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageRoutingModule": () => (/* binding */ UsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.page */ 5403);




const routes = [
    {
        path: '',
        component: _users_page__WEBPACK_IMPORTED_MODULE_0__.UsersPage
    }
];
let UsersPageRoutingModule = class UsersPageRoutingModule {
};
UsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsersPageRoutingModule);



/***/ }),

/***/ 535:
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPageModule": () => (/* binding */ UsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 8124);
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page */ 5403);







let UsersPageModule = class UsersPageModule {
};
UsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersPageRoutingModule
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_1__.UsersPage]
    })
], UsersPageModule);



/***/ }),

/***/ 5403:
/*!*******************************************!*\
  !*** ./src/app/pages/users/users.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPage": () => (/* binding */ UsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./users.page.html */ 1572);
/* harmony import */ var _users_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.page.scss */ 4242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);








let UsersPage = class UsersPage {
    constructor(router, toastController, httpClient, storageService) {
        this.router = router;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.data_loaded = false;
    }
    ngOnInit() {
        // this.storageService.get(AuthConstants.USER).then(res=>{
        //   console.log(res);
        //   this.user = res.user;
        //   this.token = res.accessToken;
        // });
    }
    ionViewWillEnter() {
        this.httpClient.getUsers(this.token).subscribe(users => {
            console.log(users);
            this.users = users;
            this.data_loaded = true;
        }, error => console.log(error));
    }
    newUser() {
        this.router.navigate(['user-detail/new']);
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
};
UsersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
UsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-users',
        template: _raw_loader_users_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_users_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UsersPage);



/***/ }),

/***/ 4242:
/*!*********************************************!*\
  !*** ./src/app/pages/users/users.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background-po {\n  position: absolute;\n  top: 0;\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n}\n\n.card {\n  min-height: 600px;\n  border-radius: 40px;\n  padding: 35px;\n  padding-top: 10px;\n  margin-bottom: 2%;\n  background-color: rgba(101, 101, 102, 0.432);\n}\n\nion-item {\n  --background: transparent!important;\n  --border-color: rgb(134, 134, 134);\n}\n\n.background-list {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0dBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJ1c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1wb3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6ICByZ2IoMTEsIDU0LCAxMjkgKTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYigxMSwgNTQsIDEyOSwgNjUlKSAwJSwgcmdiKDcsIDE4LCAzMikgMzUlLCByZ2IoNCwgMTYsIDM2LCA4NSUpIDEwMCUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDEsIDEwMSwgMTAyLCAwLjQzMik7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSJdfQ== */");

/***/ }),

/***/ 1572:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Lista de usuarios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"background-po\" >\r\n    <ion-card class=\"card\" color=\"light\" >\r\n      <ion-card-content *ngIf=\"users\">\r\n        <div class=\"warning\">\r\n          <h1 *ngIf=\"users?.length == 0\">\r\n            No se encontraron usuarios\r\n          </h1>\r\n        </div>\r\n        <ion-list class=\"background-list\">\r\n          <ion-item detail *ngFor=\"let user of users\" [routerLink]=\"'/user-detail/' + user.id\">\r\n            <ion-avatar slot=\"start\">\r\n              <ion-icon name=\"person-outline\" size=\"large\"></ion-icon>\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2>Usuario: {{user.user}}</h2>\r\n              <h3>Nombre: {{user.lastName}}, {{user.firstName}} </h3>\r\n              <p>Nivel: {{user.level}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"newUser()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add-circle\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_users_users_module_ts.js.map