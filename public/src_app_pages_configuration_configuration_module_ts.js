(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_configuration_configuration_module_ts"],{

/***/ 5742:
/*!*********************************************************************!*\
  !*** ./src/app/pages/configuration/configuration-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageRoutingModule": () => (/* binding */ ConfigurationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.page */ 1531);




const routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPage
    }
];
let ConfigurationPageRoutingModule = class ConfigurationPageRoutingModule {
};
ConfigurationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationPageRoutingModule);



/***/ }),

/***/ 8254:
/*!*************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageModule": () => (/* binding */ ConfigurationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-routing.module */ 5742);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page */ 1531);







let ConfigurationPageModule = class ConfigurationPageModule {
};
ConfigurationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPageRoutingModule
        ],
        declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_1__.ConfigurationPage]
    })
], ConfigurationPageModule);



/***/ }),

/***/ 1531:
/*!***********************************************************!*\
  !*** ./src/app/pages/configuration/configuration.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPage": () => (/* binding */ ConfigurationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration.page.html */ 739);
/* harmony import */ var _configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page.scss */ 621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ConfigurationPage = class ConfigurationPage {
    constructor() { }
    ngOnInit() {
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
};
ConfigurationPage.ctorParameters = () => [];
ConfigurationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-configuration',
        template: _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationPage);



/***/ }),

/***/ 621:
/*!*************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 739:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuration/configuration.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Configuración</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_configuration_configuration_module_ts.js.map