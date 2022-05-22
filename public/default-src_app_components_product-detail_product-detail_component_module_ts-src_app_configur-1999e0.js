(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["default-src_app_components_product-detail_product-detail_component_module_ts-src_app_configur-1999e0"],{

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
        if (!this.invalidInput) {
            this.invalidInput = {
                name: "",
                GTIN: "",
                internalCode: "",
                presentation: "",
                weightMax: "",
                weightMin: ""
            };
        }
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

/***/ 5181:
/*!*****************************************************!*\
  !*** ./src/app/services/form-validation.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidationService": () => (/* binding */ FormValidationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let FormValidationService = class FormValidationService {
    constructor() {
        this.minus = new RegExp("^(.*[a-z])");
        this.mayus = new RegExp("^(.*[A-Z])");
        this.number = new RegExp("^(.*[0-9])");
        this.symbols = new RegExp("\\W");
    }
    // VALIDA INPUT VACIO
    empty(data) {
        if (data === '')
            return 'El campo no puede estar vacío';
        else
            return '';
    }
    // VALIDA QUE LOS INPUTS SEAN STRINGS IGUALES
    areEqual(data1, data2) {
        if (data1 !== data2)
            return 'Los campos no coinciden';
        else
            return '';
    }
    // VALIDA CONTRASEÑA SEGURA
    pass(data) {
        if (!this.minus.test(data))
            return 'La contraseña debe tener al menos una letra minuscula';
        if (!this.mayus.test(data))
            return 'La contraseña debe tener al menos una letra mayuscula';
        if (!this.number.test(data))
            return 'La contraseña debe tener al menos un número';
        return '';
    }
    // VALIDA CANTIDAD MINIMA DE CARACTERES CON REGEX
    minLength(data, minLength) {
        let expr = new RegExp(`^(.{${minLength},})`);
        //con regex
        if (!expr.test(data))
            return `El campo debe contener como mínimo ${minLength} caracteres`;
        //sin regex
        // if ( !data || data.length < minLength ) return `El campo debe contener como mínimo ${minLength} caracteres`
        else
            return '';
    }
    // VALIDA QUE EL STRING PROPORCIONADO NO CONTENTENGA NÚMEROS
    notNums(data) {
        if (data.match(this.number) === null)
            return '';
        return "Field cannot contain numbers";
    }
    // VALIDA QUE EL STRING PROPORCIONADO NO CONTENTENGA SÍIMBOLOS
    notSymbols(data) {
        if (data.match(this.symbols) === null || data[data.match(this.symbols).index] === ' ')
            return '';
        return "Field cannot contain symbols";
    }
    // VALIDA QUE UN INPUT DEL TIPO TEXTO NO CONTENGA LETRAS
    onlyNums(data) {
        if (this.minus.test(data) || this.mayus.test(data) || this.symbols.test(data))
            return 'El campo debe contener solo numeros';
        else
            return '';
    }
    // VALIDA QUE UN INPUT TENGA UN VALOR NUMERICO MAYOR A OTRO
    higherThan(data1, data2) {
        if (typeof (data1) === 'undefined')
            data1 = 0;
        if (typeof (data2) === 'undefined')
            data2 = 0;
        if (data1 > data2)
            return '';
        return 'El campo debe contener un valor mayor al campo mínimo';
    }
    // VALIDA QUE UN INPUT TENGA UN VALOR NUMERICO MENOR A OTRO
    lesserThan(data1, data2) {
        if (typeof (data1) === 'undefined')
            data1 = 0;
        if (typeof (data2) === 'undefined')
            data2 = 0;
        if (data1 < data2)
            return '';
        return 'El campo debe contener un valor menor al campo máximo';
    }
    // VALIDA QUE UN CAMPO SEA VERDADERO, EN CASO SEA FALSO, DEVOLVERÁ UNA DESCRIPCION INGRESADA COMO SEGUNDO PARAMETRO A LA FUNCION
    truthy(data, description) {
        console.log(data);
        console.log(description);
        if (data === true)
            return '';
        return description;
    }
    validate(state, validations) {
        let error = {};
        if (validations.length !== 0) {
            validations.forEach(elem => {
                if (elem.val !== 0) {
                    elem.val.forEach(val => {
                        if (!(error.hasOwnProperty(elem.param1) && error[elem.param1] !== '')) {
                            if (val === 'empty')
                                error[elem.param1] = this.empty(state[elem.param1]);
                            if (val === 'higher')
                                error[elem.param1] = this.higherThan(state[elem.param1], state[elem.param2]);
                            if (val === 'lesser')
                                error[elem.param1] = this.lesserThan(state[elem.param1], state[elem.param2]);
                            if (val === 'min-length')
                                error[elem.param1] = this.minLength(state[elem.param1], elem.param2);
                            if (val === 'not-nums')
                                error[elem.param1] = this.notNums(state[elem.param1]);
                            if (val === 'not-symbols')
                                error[elem.param1] = this.notSymbols(state[elem.param1]);
                            if (val === 'pass')
                                error[elem.param1] = this.pass(state[elem.param1]);
                            if (val === 'are-equal')
                                error[elem.param1] = this.areEqual(state[elem.param1], state[elem.param2]);
                            if (val === 'only-nums')
                                error[elem.param1] = this.onlyNums(state[elem.param1]);
                            if (val === 'truthy')
                                error[elem.param1] = this.truthy(state[elem.param1], elem.param2);
                        }
                    });
                }
            });
        }
        ;
        console.log(error);
        return error;
    }
};
FormValidationService.ctorParameters = () => [];
FormValidationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], FormValidationService);



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
//# sourceMappingURL=default-src_app_components_product-detail_product-detail_component_module_ts-src_app_configur-1999e0.js.map