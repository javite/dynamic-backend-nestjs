(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 5206:
/*!*************************************!*\
  !*** ./src/app/models/ICmdsMain.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CmdsMain": () => (/* binding */ CmdsMain)
/* harmony export */ });
class CmdsMain {
    constructor() {
        this.openPO = '{"cmd":"open_po"}';
        this.configOn = '{"cmd":"config_on"}';
        this.configOff = '{"cmd":"config_off"}';
        this.machineOn = '{"cmd":"machine_on"}';
        this.machineOff = '{"cmd":"machine_off"}';
    }
}


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 1188);
/* harmony import */ var _configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../configuration/auth-constants */ 4091);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);








let AuthService = class AuthService {
    constructor(httpService, storageService, router) {
        this.httpService = httpService;
        this.storageService = storageService;
        this.router = router;
    }
    login(postData) {
        return this.httpService.post('auth/login', postData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => {
            let userStoregeObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.storageService.store(_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.USER, res));
            return userStoregeObs;
        }));
    }
    signup(postData) {
        return this.httpService.post('auth/register', postData);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.removeStorageItem(_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.USER);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



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

// function empty(data) {
//   if ( !!data && data.length !== 0 ) return '';
//   return 'Field cannot be empty';
// };
// function higherThan(data1, data2) {
//   if (typeof(data1) === 'undefined') data1 = 0;
//   if (typeof(data2) === 'undefined') data2 = 0;
//   if ( data1 > data2 ) return '';
//   return 'Field must be higher than its minimum input';
// }
// function lesserThan(data1, data2) {
//   if (typeof(data1) === 'undefined') data1 = 0;
//   if (typeof(data2) === 'undefined') data2 = 0;
//   if ( data1 < data2 ) return '';
//   return 'Field must be lesser than its minimum input';
// }
// function minLength(data, minLength) {
//   if (typeof(data) === 'undefined') data = 0;
//   if ( data.length >= minLength ) return '';
//   return `Field must contain at least ${minLength} characters`;
// }
// function notNums(data) {
//   if ( data.match(/[0-9]/) === null ) return '';
//   return "Field cannot contain numbers";
// }
// function notSymbols(data) {
//   if ( data.match(/\W/) === null || data[data.match(/\W/).index] === ' ' ) return '';
//   return "Field cannot contain symbols"; 
// }
// export function validateFormInputs(state, validations) {
//   let error = {}
//   if ( validations.length !== 0 ) {
//       validations.forEach(elem => {
//           if (elem.val !== 0) {
//               elem.val.forEach(val => {
//                   if ( !(error.hasOwnProperty( elem.param1 ) && error[elem.param1] !== '') ) {
//                       if (val === 'empty') error[elem.param1] = empty(state[elem.param1]);
//                       if (val === 'higher') error[elem.param1] = higherThan(state[elem.param1], state[elem.param2]);
//                       if (val === 'lesser') error[elem.param1] = lesserThan(state[elem.param1], state[elem.param2]);
//                       if (val === 'min-length') error[elem.param1] = minLength(state[elem.param1], elem.param2);
//                       if (val === 'not-nums') error[elem.param1] = notNums(state[elem.param1]);
//                       if (val === 'not-symbols') error[elem.param1] = notSymbols(state[elem.param1]);
//                   }
//               });
//           }
//       });
//   };
//   console.log(error)
//   return error
// }


/***/ }),

/***/ 4509:
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSocketService": () => (/* binding */ WebSocketService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);



let WebSocketService = class WebSocketService {
    constructor() {
        this.ws = null;
        this.connection_state = false;
        this.wsMsg = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.wsMsg$ = this.wsMsg.asObservable();
    }
    createWebSocket(uri) {
        console.log("create ws");
        this.uri = uri;
        this.ws = new WebSocket(this.uri);
        this.ws.onerror = (error => {
            console.log('error en la conexion con Backend');
        });
        this.ws.onopen = (() => {
            console.log('open WS');
            this.connection_state = true;
            if (this.timeout !== undefined) {
                console.log("clear timeout");
                clearTimeout(this.timeout);
            }
        });
        this.ws.onmessage = ((msg) => {
            this.msg = JSON.parse(msg.data);
            console.log(this.msg);
            this.wsMsg.next(this.msg);
            // this.handleMessageWS();
        });
        this.ws.onclose = (() => {
            console.log('closed ev WS');
            this.connection_state = false;
            this.timeout = setTimeout(() => {
                console.log("set timeout ws");
                this.createWebSocket(this.uri);
            }, 5000);
        });
    }
    sendWebSocket(message) {
        console.log(message);
        this.ws.send(message);
    }
    closeWebSocket() {
        console.log('close WS');
        this.connection_state = false;
        if (this.ws !== null) {
            this.ws.close();
        }
    }
};
WebSocketService.ctorParameters = () => [];
WebSocketService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], WebSocketService);



/***/ })

}]);
//# sourceMappingURL=common.js.map