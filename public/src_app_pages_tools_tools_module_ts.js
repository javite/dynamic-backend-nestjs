(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_tools_tools_module_ts"],{

/***/ 4177:
/*!*****************************************************!*\
  !*** ./src/app/pages/tools/tools-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsPageRoutingModule": () => (/* binding */ ToolsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tools_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.page */ 76);




const routes = [
    {
        path: '',
        component: _tools_page__WEBPACK_IMPORTED_MODULE_0__.ToolsPage
    }
];
let ToolsPageRoutingModule = class ToolsPageRoutingModule {
};
ToolsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToolsPageRoutingModule);



/***/ }),

/***/ 311:
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsPageModule": () => (/* binding */ ToolsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tools_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools-routing.module */ 4177);
/* harmony import */ var _tools_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.page */ 76);







let ToolsPageModule = class ToolsPageModule {
};
ToolsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tools_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToolsPageRoutingModule
        ],
        declarations: [_tools_page__WEBPACK_IMPORTED_MODULE_1__.ToolsPage]
    })
], ToolsPageModule);



/***/ }),

/***/ 76:
/*!*******************************************!*\
  !*** ./src/app/pages/tools/tools.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsPage": () => (/* binding */ ToolsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tools_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tools.page.html */ 5346);
/* harmony import */ var _tools_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools.page.scss */ 3143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/web-socket.service */ 4509);
/* harmony import */ var _models_ICmdsMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/ICmdsMain */ 5206);






let ToolsPage = class ToolsPage {
    constructor(webSocket) {
        this.webSocket = webSocket;
        this.power = false;
        this.cmd_main_ui = new _models_ICmdsMain__WEBPACK_IMPORTED_MODULE_3__.CmdsMain();
    }
    ngOnInit() {
    }
    powerChanged() {
        console.log(!this.power);
        if (!this.power) {
            this.webSocket.sendWebSocket(this.cmd_main_ui.machineOn);
        }
        else {
            this.webSocket.sendWebSocket(this.cmd_main_ui.machineOff);
        }
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Atrás' : 'Atrás';
    }
};
ToolsPage.ctorParameters = () => [
    { type: src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__.WebSocketService }
];
ToolsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tools',
        template: _raw_loader_tools_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tools_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ToolsPage);



/***/ }),

/***/ 3143:
/*!*********************************************!*\
  !*** ./src/app/pages/tools/tools.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29scy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5346:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tools/tools.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"getBackButtonText()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Herramientas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Encender: </ion-label>\n    <ion-toggle slot=\"end\" [(ngModel)]=\"power\" (click)=\"powerChanged()\"></ion-toggle>\n  </ion-item>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tools_tools_module_ts.js.map