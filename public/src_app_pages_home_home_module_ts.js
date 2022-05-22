(self["webpackChunkdynamic_ui_ion"] = self["webpackChunkdynamic_ui_ion"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 2283:
/*!*****************************************************************!*\
  !*** ./src/app/components/list-weight/list-weight.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListWeightComponent": () => (/* binding */ ListWeightComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_weight_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-weight.component.html */ 4347);
/* harmony import */ var _list_weight_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-weight.component.scss */ 365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let ListWeightComponent = class ListWeightComponent {
    constructor() { }
    ngOnInit() { }
    avatar(state) {
        switch (state) {
            case 0:
                return "../../../assets/check-ok.svg";
                break;
            case 1:
                return "../../../assets/arrow-up.svg";
                break;
            case 2:
                return "../../../assets/arrow-down.svg";
                break;
            case 3:
                return "../../../assets/circle.svg";
                break;
            default:
                break;
        }
    }
};
ListWeightComponent.ctorParameters = () => [];
ListWeightComponent.propDecorators = {
    units: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ListWeightComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-list-weight',
        template: _raw_loader_list_weight_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_weight_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListWeightComponent);



/***/ }),

/***/ 3059:
/*!*************************************************************************!*\
  !*** ./src/app/components/stats-bad-frame/stats-bad-frame.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsBadFrameComponent": () => (/* binding */ StatsBadFrameComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_stats_bad_frame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stats-bad-frame.component.html */ 1291);
/* harmony import */ var _stats_bad_frame_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats-bad-frame.component.scss */ 8130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let StatsBadFrameComponent = class StatsBadFrameComponent {
    constructor() {
        this.fontSize = "24";
    }
    ngOnInit() { }
};
StatsBadFrameComponent.ctorParameters = () => [];
StatsBadFrameComponent.propDecorators = {
    stats: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
StatsBadFrameComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-stats-bad-frame',
        template: _raw_loader_stats_bad_frame_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stats_bad_frame_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatsBadFrameComponent);



/***/ }),

/***/ 1885:
/*!***************************************************************************!*\
  !*** ./src/app/components/stats-good-frame/stats-good-frame.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsGoodFrameComponent": () => (/* binding */ StatsGoodFrameComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_stats_good_frame_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stats-good-frame.component.html */ 3323);
/* harmony import */ var _stats_good_frame_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats-good-frame.component.scss */ 4527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let StatsGoodFrameComponent = class StatsGoodFrameComponent {
    constructor() {
        this.fontSize = "24";
    }
    ngOnInit() { }
};
StatsGoodFrameComponent.ctorParameters = () => [];
StatsGoodFrameComponent.propDecorators = {
    stats: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
StatsGoodFrameComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-stats-good-frame',
        template: _raw_loader_stats_good_frame_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stats_good_frame_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatsGoodFrameComponent);



/***/ }),

/***/ 2592:
/*!***************************************************************!*\
  !*** ./src/app/components/status-bar/status-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBarComponent": () => (/* binding */ StatusBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_status_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./status-bar.component.html */ 1608);
/* harmony import */ var _status_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status-bar.component.scss */ 4596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let StatusBarComponent = class StatusBarComponent {
    constructor(cd) {
        this.cd = cd;
        this.init = false;
        this.machine_state = "";
        this.speed = '45';
    }
    ngOnInit() {
        this.init = true;
        this.setTextState();
        console.log(this.state);
    }
    ngAfterViewInit() {
        this.cd.detectChanges();
    }
    ngOnChanges(changes) {
        if (this.init) {
            this.setTextState();
        }
    }
    setTextState() {
        if (this.init) {
            switch (this.state) {
                case 0:
                    this.machine_state = 'INICIANDO SISTEMA';
                    break;
                case 1:
                    this.machine_state = 'CONFIGURACION';
                    break;
                case 2:
                    this.machine_state = 'DETENIDA';
                    break;
                case 3:
                    this.machine_state = 'LISTA';
                    break;
                case 4:
                    this.machine_state = 'EN MARCHA';
                    break;
                case 5:
                    this.machine_state = 'ESPERA';
                    break;
                default:
                    break;
            }
            console.log(this.machine_state);
        }
    }
};
StatusBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef }
];
StatusBarComponent.propDecorators = {
    po: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    batch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
StatusBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-status-bar',
        template: _raw_loader_status_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_status_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatusBarComponent);



/***/ }),

/***/ 6319:
/*!*********************************************************************!*\
  !*** ./src/app/components/weight-circle/weight-circle.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeightCircleComponent": () => (/* binding */ WeightCircleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_weight_circle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./weight-circle.component.html */ 3691);
/* harmony import */ var _weight_circle_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weight-circle.component.scss */ 9304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let WeightCircleComponent = class WeightCircleComponent {
    constructor() {
        this.weight = 0;
        this.result = 0;
        this.limits = { max: 0, min: 0 };
        this.titleFontSize = "16";
        this.subtitleFontSize = "10";
    }
    ngOnInit() { }
    formatSubtitle(percent) {
        if (percent >= 100) {
            return "Sobrepeso";
        }
        else if (percent <= 7.8 && percent >= 6.4) {
            return "Aceptado";
        }
        else if (percent < 6.4) {
            return "Peso bajo";
        }
        else {
            return '--';
        }
    }
    color() {
        switch (this.result) {
            case 0:
                return '#33FF3C';
                break;
            default:
                return '#FF0F0F';
                break;
        }
    }
};
WeightCircleComponent.ctorParameters = () => [];
WeightCircleComponent.propDecorators = {
    weight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    result: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    limits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
WeightCircleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-weight-circle',
        template: _raw_loader_weight_circle_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_weight_circle_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WeightCircleComponent);



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

/***/ 4657:
/*!*****************************************!*\
  !*** ./src/app/models/EMachineState.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MachineState": () => (/* binding */ MachineState)
/* harmony export */ });
var MachineState;
(function (MachineState) {
    MachineState[MachineState["INIT"] = 0] = "INIT";
    MachineState[MachineState["CONFIGURACION"] = 1] = "CONFIGURACION";
    MachineState[MachineState["STOPPED"] = 2] = "STOPPED";
    MachineState[MachineState["READY"] = 3] = "READY";
    MachineState[MachineState["RUNNING"] = 4] = "RUNNING";
    MachineState[MachineState["WAITING"] = 5] = "WAITING";
})(MachineState || (MachineState = {}));


/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-circle-progress */ 9184);
/* harmony import */ var _components_stats_bad_frame_stats_bad_frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/stats-bad-frame/stats-bad-frame.component */ 3059);
/* harmony import */ var _components_stats_good_frame_stats_good_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/stats-good-frame/stats-good-frame.component */ 1885);
/* harmony import */ var _components_weight_circle_weight_circle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/weight-circle/weight-circle.component */ 6319);
/* harmony import */ var _components_list_weight_list_weight_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/list-weight/list-weight.component */ 2283);
/* harmony import */ var _components_status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/status-bar/status-bar.component */ 2592);













let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_12__.NgCircleProgressModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _components_stats_bad_frame_stats_bad_frame_component__WEBPACK_IMPORTED_MODULE_2__.StatsBadFrameComponent, _components_stats_good_frame_stats_good_frame_component__WEBPACK_IMPORTED_MODULE_3__.StatsGoodFrameComponent, _components_weight_circle_weight_circle_component__WEBPACK_IMPORTED_MODULE_4__.WeightCircleComponent, _components_list_weight_list_weight_component__WEBPACK_IMPORTED_MODULE_5__.ListWeightComponent, _components_status_bar_status_bar_component__WEBPACK_IMPORTED_MODULE_6__.StatusBarComponent]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configuration/auth-constants */ 4091);
/* harmony import */ var src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/EMachineState */ 4657);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ 6858);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ 1188);
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/web-socket.service */ 4509);
/* harmony import */ var _configuration_enviroment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../configuration/enviroment */ 3685);
/* harmony import */ var _models_ICmdsMain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../models/ICmdsMain */ 5206);














const TEXTS = {
    BUTTON_START: 'INICIAR',
    BUTTON_STOP: 'DETENER'
};
let HomePage = class HomePage {
    constructor(storageService, authService, alertController, router, httpClient, platform, webSocket) {
        this.storageService = storageService;
        this.authService = authService;
        this.alertController = alertController;
        this.router = router;
        this.httpClient = httpClient;
        this.platform = platform;
        this.webSocket = webSocket;
        this.ws = null;
        this.connection_state = false;
        this.stats = { OK: 0, NOK: 0, nokHigh: 0, nokLow: 0, nokOther: 0, Total: 0, percentageOK: 0, percentageNOK: 0, percentagesReason: [] };
        this.weight = 0;
        this.result = 0;
        this.limits = { max: 0, min: 0 };
        this.userName = "";
        this.machine_state = src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.READY;
        this.cmd_main_ui = new _models_ICmdsMain__WEBPACK_IMPORTED_MODULE_9__.CmdsMain();
        this.disabled_menu = false;
        this.power = false;
        this.textStartButton = TEXTS.BUTTON_START;
    }
    ngOnInit() {
        console.log("home loaded");
        setInterval(() => this.time = Date.now(), 1000);
        this.userSubscription = this.storageService.userData.subscribe(user => {
            console.log(user);
            this.user = user;
            if (user === null) {
                this.userName = "Sin usuario";
            }
            else {
                this.userName = user.firstName + " " + user.lastName;
            }
        });
        this.platforms = this.platform.platforms();
        for (let index = 0; index < this.platforms.length; index++) {
            if (this.platforms[index] == 'mobileweb' || this.platforms[index] == 'pwa') {
                this.plat = 'web';
                break;
            }
        }
        this.storageService.get(src_app_configuration_auth_constants__WEBPACK_IMPORTED_MODULE_2__.AuthConstants.USER).then(res => {
            console.log(res);
            this.token = res.accessToken;
        });
        if (this.plat === 'web') {
            this.uri = _configuration_enviroment__WEBPACK_IMPORTED_MODULE_8__.environment.ws_local;
        }
        else {
            this.uri = _configuration_enviroment__WEBPACK_IMPORTED_MODULE_8__.environment.ws_mobile;
        }
        this.webSocket.createWebSocket(this.uri);
        this.webSocket.wsMsg$.subscribe(data => {
            this.handleMessageWS(data);
        });
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    ionViewWillEnter() {
        console.log("home will enter");
        this.getActivePO();
        this.webSocket.sendWebSocket(this.cmd_main_ui.configOff);
    }
    ionViewWillLeave() {
        this.webSocket.sendWebSocket(this.cmd_main_ui.configOn);
        console.log("home will leave");
    }
    handleMessageWS(data) {
        this.msg = data;
        console.log(this.msg.payload);
        switch (this.msg.command) {
            case 'stats':
                console.log('stats');
                this.stats = this.msg.payload.stats;
                break;
            case 'weight':
                console.log("Weight received: ", this.msg.payload.weight);
                this.weight = this.msg.payload.weight.weight;
                this.result = this.msg.payload.weight.state;
                this.updateList();
                break;
            case 'limits':
                console.log('limits');
                this.limits = this.msg.payload.limits;
                break;
            case 'machine_state':
                // console.log('machine_state');
                console.log('machine_state: ', this.msg.payload.state);
                switch (this.msg.payload.state) {
                    case 0:
                        this.machine_state = src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.READY;
                        this.disabled_menu = false;
                        break;
                    case 1:
                        this.machine_state = src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.RUNNING;
                        this.disabled_menu = true;
                        break;
                    case 5:
                        this.machine_state = src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.STOPPED;
                        this.disabled_menu = false;
                        break;
                    default:
                        this.machine_state = src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.READY;
                        this.disabled_menu = false;
                        break;
                }
                break;
            default:
                break;
        }
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user === null) {
                this.router.navigate(['login']);
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Atención!',
                    message: "¿Desea cerrar la sesión?",
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                            }
                        }, {
                            text: 'Si',
                            handler: () => {
                                this.authService.logout().then();
                                this.httpClient.logOut(this.token)
                                    .subscribe(res => console.log(res), error => console.log(error));
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    updateList() {
        switch (this.machine_state) {
            case src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.RUNNING:
                this.getUnitListAndStats(11, this.batch.id);
                // this.updateStatsAndList(); //this function makes stats on front end, for better performance. Not in use for the moment.
                break;
            case src_app_models_EMachineState__WEBPACK_IMPORTED_MODULE_3__.MachineState.WAITING:
                break;
            default:
                break;
        }
    }
    getActivePO() {
        this.httpClient.getActivePO().subscribe(data => {
            console.log(data);
            if (data.length === 0) {
                console.log("po cerrada");
                this.po = null;
                this.batch = null;
                this.product = null;
                this.limits.max = 0;
                this.limits.min = 0;
                this.stats.OK = 0;
                this.stats.NOK = 0;
                this.stats.Total = 0;
                this.stats.percentageNOK = 0;
                this.stats.percentageOK = 0;
                this.stats.percentagesReason[0] = 0;
                this.stats.percentagesReason[1] = 0;
                this.stats.percentagesReason[2] = 0;
            }
            else {
                this.po = data[0];
                this.batch = data[0].batches.filter(batch => batch.state == 1)[0];
                this.product = data[0].products[0];
                this.limits.max = this.product.weightMax;
                this.limits.min = this.product.weightMin;
                this.getUnitListAndStats(10, this.batch.id);
            }
        }, error => {
            this.showAlert('No se recibio respuesta del servidor');
        });
    }
    getUnitListAndStats(units, batchId) {
        this.httpClient.getUnitListAndStats(units, batchId)
            .subscribe(data => {
            this.units = data.list;
            this.stats.OK = data.stats.okTotal;
            this.stats.NOK = data.stats.nokHigh + data.stats.nokLow + data.stats.nokOther;
            this.stats.nokHigh = data.stats.nokHigh;
            this.stats.nokLow = data.stats.nokLow;
            this.stats.nokOther = data.stats.nokOther;
            this.stats.Total = this.stats.OK + this.stats.NOK;
            this.stats.percentageNOK = (this.stats.NOK / this.stats.Total) * 100;
            this.stats.percentageOK = (this.stats.OK / this.stats.Total) * 100;
            this.stats.percentagesReason[0] = (data.stats.nokHigh / this.stats.NOK) * 100;
            this.stats.percentagesReason[1] = (data.stats.nokLow / this.stats.NOK) * 100;
            this.stats.percentagesReason[2] = (data.stats.nokOther / this.stats.NOK) * 100;
        }, error => console.log(error));
    }
    updateStatsAndList() {
        this.unit = { id: null, state: this.result, value: this.weight, createdAt: new Date().toISOString() };
        this.units.unshift(this.unit);
        this.units = this.units.slice(0, 11);
        console.log(this.units);
        // state: 0 ok, 1 high, 2 low, 3 other
        switch (this.result) {
            case 0:
                this.stats.OK++;
                break;
            case 1:
                this.stats.nokHigh++;
                break;
            case 2:
                this.stats.nokLow++;
                break;
            case 3:
                this.stats.nokOther++;
                break;
            default:
                console.log("Default case updateStatsAndList");
                break;
        }
        this.stats.NOK = this.stats.nokHigh + this.stats.nokLow + this.stats.nokOther;
        this.stats.Total = this.stats.OK + this.stats.NOK;
        this.stats.percentageNOK = (this.stats.NOK / this.stats.Total) * 100;
        this.stats.percentageOK = (this.stats.OK / this.stats.Total) * 100;
        this.stats.percentagesReason[0] = (this.stats.nokHigh / this.stats.NOK) * 100;
        this.stats.percentagesReason[1] = (this.stats.nokLow / this.stats.NOK) * 100;
        this.stats.percentagesReason[2] = (this.stats.nokOther / this.stats.NOK) * 100;
    }
    showAlert(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención!',
                message: msg,
                buttons: [
                    {
                        text: 'OK',
                        role: 'ok',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }
                ]
            });
            yield alert.present();
            setTimeout(() => alert.dismiss(), 2000);
        });
    }
    powerChanged() {
        console.log(this.power);
        this.power = !this.power;
        if (!this.power) {
            this.webSocket.sendWebSocket(this.cmd_main_ui.machineOff);
            this.textStartButton = TEXTS.BUTTON_START;
        }
        else {
            this.webSocket.sendWebSocket(this.cmd_main_ui.machineOn);
            this.textStartButton = TEXTS.BUTTON_STOP;
        }
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_7__.WebSocketService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 365:
/*!*******************************************************************!*\
  !*** ./src/app/components/list-weight/list-weight.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@keyframes animation-list {\n  0% {\n    opacity: 0.3;\n    right: -200px;\n  }\n  100% {\n    opacity: 1;\n    right: 0px;\n  }\n}\n.frame {\n  position: relative;\n  animation-name: animation-list;\n  animation-duration: 1s;\n  animation-timing-function: ease-in-out;\n}\n.container-list {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-content: center;\n}\n.non-block {\n  display: inline;\n}\n.img {\n  height: 25px;\n  width: 25px;\n}\nion-note {\n  --color: rgb(168, 168, 168);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtd2VpZ2h0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFBTSxZQUFBO0lBQWMsYUFBQTtFQUd0QjtFQUZFO0lBQU8sVUFBQTtJQUFZLFVBQUE7RUFNckI7QUFDRjtBQUpBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUFNSjtBQUpBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFPSjtBQUxBO0VBQ0ksZUFBQTtBQVFKO0FBTEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVFKO0FBTEE7RUFDSSwyQkFBQTtBQVFKIiwiZmlsZSI6Imxpc3Qtd2VpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBhbmltYXRpb24tbGlzdCB7XHJcbiAgICAwJSAgIHtvcGFjaXR5OiAwLjM7IHJpZ2h0OiAtMjAwcHg7fVxyXG4gICAgMTAwJSAge29wYWNpdHk6IDE7IHJpZ2h0OiAwcHg7fVxyXG4gIH1cclxuICBcclxuLmZyYW1lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRpb24tbGlzdDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG4uY29udGFpbmVyLWxpc3R7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubm9uLWJsb2Nre1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uaW1ne1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1ub3Rle1xyXG4gICAgLS1jb2xvcjogcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG59Il19 */");

/***/ }),

/***/ 8130:
/*!***************************************************************************!*\
  !*** ./src/app/components/stats-bad-frame/stats-bad-frame.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@keyframes animation-bad {\n  0% {\n    opacity: 0.3;\n    left: -200px;\n  }\n  25% {\n    opacity: 1;\n    left: 0px;\n  }\n}\n.frame {\n  position: relative;\n  animation-name: animation-bad;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n}\n.container-stats {\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 5px 3px 5px black;\n}\n.container-top {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  padding: 5px;\n}\n.container-bottom {\n  height: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: linear-gradient(45deg, #1010106b, #2c151594);\n}\n.container-circle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  width: 33%;\n  max-width: 85px;\n  padding: 5px;\n}\n.tittle-top {\n  font-size: min(4.3vh, 24px);\n  color: #DE122E;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.text-top {\n  font-size: min(5.5vh, 30px);\n  font-weight: 500;\n  color: #DE122E;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.container-text-bottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 55%;\n  background-color: black;\n}\n.text-center {\n  font-size: 20px;\n  color: white;\n}\n.text-bottom {\n  margin-top: 5px;\n  font-size: 20px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLWJhZC1mcmFtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQU0sWUFBQTtJQUFjLFlBQUE7RUFHdEI7RUFGRTtJQUFNLFVBQUE7SUFBWSxTQUFBO0VBTXBCO0FBQ0Y7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FBTUo7QUFIQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFNSjtBQUpBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQU9KO0FBTEE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0FBUUo7QUFMQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFTSjtBQVBBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFVSjtBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQVdKO0FBVEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVlKO0FBVkE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFhSiIsImZpbGUiOiJzdGF0cy1iYWQtZnJhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGFuaW1hdGlvbi1iYWQge1xyXG4gICAgMCUgICB7b3BhY2l0eTogMC4zOyBsZWZ0OiAtMjAwcHg7fVxyXG4gICAgMjUlICB7b3BhY2l0eTogMTsgbGVmdDogMHB4O31cclxuICB9XHJcbiAgXHJcbi5mcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uLWJhZDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1zdGF0c3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAgNXB4IDNweCA1cHggYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lci10b3B7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb250YWluZXItYm90dG9teyAgICAgXHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMxMDEwMTA2YiwgIzJjMTUxNTk0KTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59IFxyXG4uY29udGFpbmVyLWNpcmNsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBtYXgtd2lkdGg6IDg1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLnRpdHRsZS10b3B7XHJcbiAgICBmb250LXNpemU6IG1pbig0LjN2aCwgMjRweCk7XHJcbiAgICBjb2xvcjogI0RFMTIyRTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi50ZXh0LXRvcHtcclxuICAgIGZvbnQtc2l6ZTogbWluKDUuNXZoLCAzMHB4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0RFMTIyRTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jb250YWluZXItdGV4dC1ib3R0b217XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZXh0LWJvdHRvbXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ 4527:
/*!*****************************************************************************!*\
  !*** ./src/app/components/stats-good-frame/stats-good-frame.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@keyframes animation-good {\n  0% {\n    opacity: 0.3;\n    top: -200px;\n  }\n  25% {\n    opacity: 1;\n    top: 0px;\n  }\n}\n.frame {\n  position: relative;\n  animation-name: animation-good;\n  animation-duration: 3s;\n  animation-timing-function: ease-in-out;\n}\n.container-stats {\n  width: 100%;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 5px 3px 15px black;\n}\n.container-top {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  padding: 5px;\n}\n.container-bottom {\n  height: 150px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background: linear-gradient(45deg, #1010106b, #192c1594);\n}\n.container-circle {\n  width: 35%;\n  max-width: 125px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.tittle-top {\n  font-size: min(4.3vh, 24px);\n  color: #32af37;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.text-top {\n  font-size: min(5.5vh, 30px);\n  font-weight: 500;\n  color: #32af37;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.container-text-bottom {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 50%;\n}\n.text-center {\n  font-size: 20px;\n  color: white;\n}\n.text-bottom {\n  font-size: 22px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLWdvb2QtZnJhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUFNLFlBQUE7SUFBYyxXQUFBO0VBR3RCO0VBRkU7SUFBTSxVQUFBO0lBQVksUUFBQTtFQU1wQjtBQUNGO0FBSkE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQU1KO0FBSkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFRSjtBQU5BO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3REFBQTtBQVNKO0FBTkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVNKO0FBUEE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFVSjtBQVJBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFXSjtBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFZSjtBQVRBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFZSjtBQVZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFhSiIsImZpbGUiOiJzdGF0cy1nb29kLWZyYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBhbmltYXRpb24tZ29vZCB7XHJcbiAgICAwJSAgIHtvcGFjaXR5OiAwLjM7IHRvcDogLTIwMHB4O31cclxuICAgIDI1JSAge29wYWNpdHk6IDE7IHRvcDogMHB4O31cclxuICB9XHJcbiAgXHJcbi5mcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uLWdvb2Q7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmNvbnRhaW5lci1zdGF0c3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAgNXB4IDNweCAxNXB4IGJsYWNrO1xyXG59XHJcbi5jb250YWluZXItdG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY29udGFpbmVyLWJvdHRvbXsgICAgIFxyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMTAxMDEwNmIsICMxOTJjMTU5NCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufSBcclxuLmNvbnRhaW5lci1jaXJjbGV7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4udGl0dGxlLXRvcHtcclxuICAgIGZvbnQtc2l6ZTogbWluKDQuM3ZoLCAyNHB4KTtcclxuICAgIGNvbG9yOiAjMzJhZjM3O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnRleHQtdG9we1xyXG4gICAgZm9udC1zaXplOiBtaW4oNS41dmgsIDMwcHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMzJhZjM3O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmNvbnRhaW5lci10ZXh0LWJvdHRvbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRleHQtYm90dG9te1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ 4596:
/*!*****************************************************************!*\
  !*** ./src/app/components/status-bar/status-bar.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@keyframes animation-status {\n  0% {\n    opacity: 0.3;\n    top: -100px;\n  }\n  90% {\n    opacity: 1;\n    top: 0px;\n  }\n}\n.frame {\n  position: relative;\n  animation-name: animation-status;\n  animation-duration: 1s;\n  animation-timing-function: ease-in-out;\n}\n.status-bar {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: 5px;\n  height: 100%;\n}\n.init {\n  background: linear-gradient(180deg, #232423 0%, #161817 45%, #3c3d3c 100%);\n}\n.running {\n  background: linear-gradient(180deg, #34c96d 0%, #189142 45%, #062811 100%);\n}\n.ready {\n  background: linear-gradient(180deg, #5d9eff 0%, #285a97 45%, #17324e7d 100%);\n}\n.stopped {\n  background: linear-gradient(180deg, #e27679e9 0%, #962020ff 45%, #962020ff 100%);\n}\n.stoppedby {\n  background: linear-gradient(180deg, #e27679e9 0%, #e96107 45%, #962020ff 100%);\n}\n.waiting {\n  background: linear-gradient(180deg, #dfe276e9 0%, #968620ff 45%, #968620ff 100%);\n}\n.border {\n  border-right: #c4c7d1 solid 1px;\n}\n.col-1 {\n  width: 33%;\n  height: 78%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n}\n.text-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n  align-content: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 23px;\n  color: #ddd8d8;\n}\n.header {\n  background: linear-gradient(181deg, #666666, #262626);\n}\n.po-name {\n  font-size: 15px;\n  margin: 0;\n  margin-left: 4px;\n  line-height: 20px;\n}\n.product-name {\n  font-size: 15px;\n  margin: 0;\n  margin-left: 12px;\n  line-height: 20px;\n}\n.batch-name {\n  font-size: 15px;\n  margin: 0;\n  margin-left: 20px;\n  line-height: 20px;\n}\n.machine-state-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n  align-content: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.machine-state {\n  color: #d5cdcd;\n  font-size: 26px;\n  margin: 0;\n}\n.info-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n  align-content: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  padding-left: 35px;\n}\n.speed {\n  color: #d5cdcd;\n  font-size: 18px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUFNLFlBQUE7SUFBYyxXQUFBO0VBR3RCO0VBREU7SUFBTSxVQUFBO0lBQVksUUFBQTtFQUtwQjtBQUNGO0FBSEE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQUtKO0FBSEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFNSjtBQUhBO0VBQ0ksMEVBQUE7QUFNSjtBQUhBO0VBQ0ksMEVBQUE7QUFNSjtBQUhBO0VBQ0ksNEVBQUE7QUFNSjtBQUhBO0VBQ0ksZ0ZBQUE7QUFNSjtBQUhBO0VBQ0ksOEVBQUE7QUFNSjtBQUhBO0VBQ0ksZ0ZBQUE7QUFNSjtBQUhBO0VBQ0ksK0JBQUE7QUFNSjtBQUpBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBT0o7QUFKQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQU9KO0FBSkE7RUFDSSxxREFBQTtBQU9KO0FBSkE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFPSjtBQUxBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBUUo7QUFOQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVNKO0FBUEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTSjtBQVBBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBVUo7QUFSQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVUo7QUFQQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQVVKIiwiZmlsZSI6InN0YXR1cy1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGFuaW1hdGlvbi1zdGF0dXMge1xyXG4gICAgMCUgICB7b3BhY2l0eTogMC4zOyB0b3A6IC0xMDBweDt9XHJcbiAgICAvLyA1MCUgIHtvcGFjaXR5OiAxOyB0b3A6IC0yMHB4O31cclxuICAgIDkwJSAge29wYWNpdHk6IDE7IHRvcDogMHB4O31cclxuICB9XHJcbiAgXHJcbi5mcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYW5pbWF0aW9uLXN0YXR1cztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG4uc3RhdHVzLWJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaW5pdHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigzNSwgMzYsIDM1KSAwJSwgcmdiKDIyLCAyNCwgMjMpIDQ1JSwgcmdiKDYwLCA2MSwgNjApIDEwMCUpO1xyXG59XHJcblxyXG4ucnVubmluZ3tcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNTIsMjAxLDEwOSwxKSAwJSwgcmdiKDI0LCAxNDUsIDY2LDEpIDQ1JSwgcmdiYSg2LDQwLDE3LDEpIDEwMCUpO1xyXG59XHJcblxyXG4ucmVhZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNWQ5ZWZmICAwJSwgIzI4NWE5NyA0NSUsICMxNzMyNGU3ZCAxMDAlKTtcclxufVxyXG5cclxuLnN0b3BwZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZTI3Njc5ZTkgMCUsICM5NjIwMjBmZiA0NSUsICM5NjIwMjBmZiAxMDAlKTtcclxufVxyXG5cclxuLnN0b3BwZWRieXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNlMjc2NzllOSAwJSwgcmdiKDIzMywgOTcsIDcpIDQ1JSwgIzk2MjAyMGZmIDEwMCUpO1xyXG59XHJcblxyXG4ud2FpdGluZ3tcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNkZmUyNzZlOSAwJSwgIzk2ODYyMGZmIDQ1JSwgIzk2ODYyMGZmIDEwMCUpO1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OiNjNGM3ZDEgc29saWQgMXB4O1xyXG59XHJcbi5jb2wtMXtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBoZWlnaHQ6IDc4JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIzcHg7XHJcbiAgICBjb2xvcjogI2RkZDhkODtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODFkZWcsIzY2NjY2NiwgIzI2MjYyNik7XHJcbn1cclxuXHJcbi5wby1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5wcm9kdWN0LW5hbWV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5iYXRjaC1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4ubWFjaGluZS1zdGF0ZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gbWluLWhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcbi5tYWNoaW5lLXN0YXRle1xyXG4gICAgY29sb3I6ICNkNWNkY2Q7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmluZm8tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbn1cclxuXHJcbi5zcGVlZHtcclxuICAgIGNvbG9yOiAjZDVjZGNkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */");

/***/ }),

/***/ 9304:
/*!***********************************************************************!*\
  !*** ./src/app/components/weight-circle/weight-circle.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@keyframes animation-weight {\n  0% {\n    opacity: 0.3;\n    bottom: -800px;\n  }\n  25% {\n    opacity: 1;\n    bottom: 0px;\n  }\n}\n.frame {\n  position: relative;\n  animation-name: animation-weight;\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n}\n.container-weight {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 550px;\n}\n.circle-container {\n  max-width: 380px;\n  width: 100%;\n}\n.container-text-max {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n.container-text-min {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  margin-top: 10px;\n}\n.text-max {\n  color: white;\n  font-size: 25px;\n  margin: 0 auto;\n}\n.text-min {\n  color: white;\n  font-size: 25px;\n  margin: 0 auto;\n}\n.text-center {\n  color: white;\n  font-size: 64px;\n}\n.circle {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlaWdodC1jaXJjbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUFNLFlBQUE7SUFBYyxjQUFBO0VBR3RCO0VBRkU7SUFBTSxVQUFBO0lBQVksV0FBQTtFQU1wQjtBQUNGO0FBSkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtBQU1KO0FBSEE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVFKO0FBTkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBU0o7QUFQQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQVVKO0FBUkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFXSjtBQVRBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFZSjtBQVZBO0VBQ0ksV0FBQTtBQWFKIiwiZmlsZSI6IndlaWdodC1jaXJjbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGFuaW1hdGlvbi13ZWlnaHQge1xyXG4gICAgMCUgICB7b3BhY2l0eTogMC4zOyBib3R0b206IC04MDBweDt9XHJcbiAgICAyNSUgIHtvcGFjaXR5OiAxOyBib3R0b206IDBweDt9XHJcbiAgfVxyXG4gIFxyXG4uZnJhbWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1hdGlvbi13ZWlnaHQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItd2VpZ2h0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG59XHJcbi5jaXJjbGUtY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOjM4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lci10ZXh0LW1heHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY29udGFpbmVyLXRleHQtbWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi50ZXh0LW1heHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDsgIFxyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG59XHJcbi50ZXh0LW1pbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDsgICBcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDY0cHg7ICAgXHJcbn1cclxuLmNpcmNsZXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */");

/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".home-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: relative;\n}\n\n.background {\n  background: #0b3681;\n  background: radial-gradient(circle, rgba(11, 54, 129, 0.65) 0%, #071220 35%, rgba(4, 16, 36, 0.85) 100%);\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.home-container {\n  height: 100%;\n}\n\n.status-bar-container {\n  width: 100%;\n  height: 14%;\n  background: rgba(4, 16, 36, 0.85);\n}\n\n.caveat {\n  font-family: \"Inconsolate\", monospace;\n  font-size: 30px;\n  font-weight: 100;\n}\n\n.status-bar {\n  width: 100%;\n}\n\n.stats-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 30%;\n  height: 100%;\n  padding-left: 10px;\n}\n\n.stats-frame-container {\n  width: 98%;\n}\n\n.weight-container {\n  width: 44%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.list-container {\n  padding: 0;\n}\n\n.center {\n  text-align: center;\n}\n\n.footer-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.stats {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.weight-div {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hour {\n  padding-right: 15px;\n  text-align: end;\n}\n\n.footer {\n  margin-top: 10px;\n  width: 100%;\n  border-radius: 48px;\n  background: rgba(27, 51, 94, 0.34);\n  background: linear-gradient(90deg, rgba(27, 51, 94, 0.34) 12%, rgba(16, 41, 68, 0.82) 89%);\n}\n\n.button-start-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.button-start {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 90px;\n  width: 150px;\n  color: #d7d7d7;\n  text-align: center;\n  border-radius: 48px;\n  font-size: 22px;\n}\n\n.green {\n  background: #0e961d;\n  background: linear-gradient(0deg, #1fa52e 12%, #11870a 35%, #d6ffd6 112%);\n  border: 3px solid #008500;\n}\n\n.red {\n  background: #a70606;\n  background: linear-gradient(0deg, #b11919fa 12%, #a70606 35%, #edbebe 112%);\n  border: 3px solid #a11313;\n}\n\n.allerts {\n  width: 50px;\n  height: 50px;\n  margin-left: 25px;\n  filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx3R0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQU1BO0VBQ0ksWUFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQUhKOztBQU1BO0VBRUkscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFTSSxVQUFBO0FBWko7O0FBZUE7RUFDSSxrQkFBQTtBQVpKOztBQWVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVpKOztBQWVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBWko7O0FBZUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEZBQUE7QUFaSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBWko7O0FBZUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFlQTtFQUNJLG1CQUFBO0VBQ0EseUVBQUE7RUFDQSx5QkFBQTtBQVpKOztBQWNBO0VBQ0ksbUJBQUE7RUFDQSwyRUFBQTtFQUNBLHlCQUFBO0FBWEo7O0FBY0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7QUFYSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXNjcmVlbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDExLCA1NCwgMTI5ICk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2IoMTEsIDU0LCAxMjksIDY1JSkgMCUsIHJnYig3LCAxOCwgMzIpIDM1JSwgcmdiKDQsIDE2LCAzNiwgODUlKSAxMDAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lci1ncmlkIHtcclxuICAgIC8vIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDQsIDE2LCAzNiwgODUlKTtcclxufVxyXG5cclxuLmNhdmVhdHtcclxuICAgIC8vIGZvbnQtZmFtaWx5OidDYXZlYXQnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1mYW1pbHk6J0luY29uc29sYXRlJywgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLnN0YXR1cy1iYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN0YXRzLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnN0YXRzLWZyYW1lLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbi53ZWlnaHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOjQ0JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmxpc3QtY29udGFpbmVye1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIC8vIHdpZHRoOiAyNiU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzBkMGQwZSwgIzBGMEYwRiwgIzE0MTQxNCk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndlaWdodC1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaG91cntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjcgNTEgOTQgLyAzNCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjcgNTEgOTQgLyAzNCUpIDEyJSwgcmdiKDE2IDQxIDY4IC8gODIlKSA4OSUpOztcclxufVxyXG5cclxuLmJ1dHRvbi1zdGFydC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1zdGFydHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6ICNkN2Q3ZDc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE0LDE1MCwyOSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzFmYTUyZSAxMiUsICMxMTg3MGEgMzUlLCAjZDZmZmQ2IDExMiUpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwODUwMDtcclxufVxyXG4ucmVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNhNzA2MDY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2IxMTkxOWZhIDEyJSwgI2E3MDYwNiAzNSUsICNlZGJlYmUgMTEyJSk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjYTExMzEzO1xyXG59XHJcblxyXG4uYWxsZXJ0cyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggNXB4IDJweCByZ2IoMCAwIDAgLyAwLjQpKTtcclxufSJdfQ== */");

/***/ }),

/***/ 4347:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-weight/list-weight.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container-list frame\">\r\n  <ion-list mode=ios>\r\n    <ion-list-header>\r\n      <ion-label class=\"ion-margin-top\">Historial</ion-label>\r\n    </ion-list-header>\r\n    <ion-item *ngFor=\"let unit of units\">\r\n      <ion-avatar slot=\"start\" class=\"ion-no-margin\">\r\n        <img [src]=\"avatar(unit.state)\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p>{{unit.createdAt | date:'d/M/yy H:mm' }}</p>\r\n      </ion-label>\r\n      <ion-note>{{unit.value}} g</ion-note>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>");

/***/ }),

/***/ 1291:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stats-bad-frame/stats-bad-frame.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container-stats frame\" *ngIf=\"stats\">\r\n  <div class=\"container-top\">\r\n      <h1 class=\"tittle-top\">\r\n          Rechazados\r\n      </h1>\r\n      <h1 class=\"text-top\">\r\n          {{stats.NOK}}\r\n      </h1>\r\n  </div>\r\n  <div class=\"container-bottom\">\r\n      <div class=\"container-circle\">\r\n        <circle-progress\r\n        [percent]=\"stats.percentagesReason[0]\"\r\n        [titleFontSize]=\"fontSize\"\r\n        unitsFontSize=\"16\"\r\n        [titleColor]=\"'#bfbfbf'\"\r\n        [unitsColor]=\"'#bfbfbf'\"\r\n        [outerStrokeColor] = \"'yellow'\"\r\n        [outerStrokeGradientStopColor] = \"'#53a9ff'\"\r\n        [innerStrokeColor] = \"'#dfe0e33c'\"\r\n        [showTitle]=\"true\"\r\n        [showSubtitle]=\"false\"\r\n        [subtitle]=\"'Actual'\"\r\n        [showUnits]=\"true\"\r\n        [showInnerStroke]=\"true\"\r\n        [showZeroOuterStroke]=\"true\"\r\n        [radius]=\"40\"\r\n        [outerStrokeWidth]=\"3\"\r\n        [innerStrokeWidth]=\"3\" \r\n        [space]=\"-3\"\r\n        [startFromZero]=\"false\"\r\n        [clockwise]=\"true\"\r\n        [animation]=\"true\"\r\n        [animateTitle] = \"true\"\r\n        [animateSubtitle] = \"true\"\r\n        [animationDuration]=\"300\"\r\n        [responsive]=\"true\"    > \r\n    </circle-progress>\r\n          <h1 class=\"text-bottom\">\r\n              Alto\r\n          </h1>\r\n      </div>\r\n      <div class=\"container-circle\">\r\n        <circle-progress\r\n            [percent]=\"stats.percentagesReason[1]\"\r\n            [titleFontSize]=\"fontSize\"\r\n            unitsFontSize=\"16\"\r\n            [titleColor]=\"'#bfbfbf'\"\r\n            [unitsColor]=\"'#bfbfbf'\"\r\n            [outerStrokeColor] = \"'#E35C05'\"\r\n            [outerStrokeGradientStopColor] = \"'#53a9ff'\"\r\n            [innerStrokeColor] = \"'#dfe0e33c'\"\r\n            [showTitle]=\"true\"\r\n            [showSubtitle]=\"false\"\r\n            [subtitle]=\"'Actual'\"\r\n            [showUnits]=\"true\"\r\n            [showInnerStroke]=\"true\"\r\n            [showZeroOuterStroke]=\"true\"\r\n            [radius]=\"40\"\r\n            [outerStrokeWidth]=\"3\"\r\n            [innerStrokeWidth]=\"3\" \r\n            [space]=\"-3\"\r\n            [startFromZero]=\"false\"\r\n            [clockwise]=\"true\"\r\n            [animation]=\"true\"\r\n            [animateTitle] = \"true\"\r\n            [animateSubtitle] = \"true\"\r\n            [animationDuration]=\"300\"\r\n            [responsive]=\"true\"    >\r\n        </circle-progress> \r\n          <h1 class=\"text-bottom\">\r\n              Bajo\r\n          </h1>\r\n      </div>\r\n      <div class=\"container-circle\">\r\n        <circle-progress\r\n            [percent]=\"stats.percentagesReason[2]\"\r\n            [titleFontSize]=\"fontSize\"\r\n            unitsFontSize=\"16\"\r\n            [titleColor]=\"'#bfbfbf'\"\r\n            [unitsColor]=\"'#bfbfbf'\"\r\n            [outerStrokeColor] = \"'#3383FF'\"\r\n            [outerStrokeGradientStopColor] = \"'#53a9ff'\"\r\n            [innerStrokeColor] = \"'#dfe0e33c'\"\r\n            [showTitle]=\"true\"\r\n            [showSubtitle]=\"false\"\r\n            [subtitle]=\"'Actual'\"\r\n            [showUnits]=\"true\"\r\n            [showInnerStroke]=\"true\"\r\n            [showZeroOuterStroke]=\"true\"\r\n            [radius]=\"40\"\r\n            [outerStrokeWidth]=\"3\"\r\n            [innerStrokeWidth]=\"3\" \r\n            [space]=\"-3\"\r\n            [startFromZero]=\"false\"\r\n            [clockwise]=\"true\"\r\n            [animation]=\"true\"\r\n            [animateTitle] = \"true\"\r\n            [animateSubtitle] = \"true\"\r\n            [animationDuration]=\"300\"\r\n            [responsive]=\"true\" > \r\n        </circle-progress>\r\n          <h1 class=\"text-bottom\">\r\n              Otros\r\n          </h1>\r\n      </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 3323:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/stats-good-frame/stats-good-frame.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container-stats frame\" *ngIf=\"stats\">\r\n  <div class=\"container-top\">\r\n      <h1 class=\"tittle-top\">\r\n          Aceptados\r\n      </h1>\r\n      <h1 class=\"text-top\">\r\n          {{stats.OK}}\r\n      </h1>\r\n  </div>\r\n  <div class=\"container-bottom\">\r\n      <div class=\"container-circle\">\r\n        <circle-progress\r\n          [percent]=\"stats.percentageOK\"\r\n          [titleFontSize]=\"fontSize\"\r\n          unitsFontSize=\"16\"\r\n          [titleColor]=\"'#bfbfbf'\"\r\n          [unitsColor]=\"'#bfbfbf'\"\r\n          [outerStrokeColor] = \"'#33FF3C'\"\r\n          [outerStrokeGradientStopColor] = \"'#53a9ff'\"\r\n          [innerStrokeColor] = \"'#DE122E'\"\r\n          [showTitle]=\"true\"\r\n          [showSubtitle]=\"false\"\r\n          [subtitle]=\"'Actual'\"\r\n          [showUnits]=\"true\"\r\n          [showInnerStroke]=\"true\"\r\n          [showZeroOuterStroke]=\"true\"\r\n          [radius]=\"50\"\r\n          [outerStrokeLinecap]=\"'square'\"\r\n          [outerStrokeWidth]=\"6\"\r\n          [innerStrokeWidth]=\"6\" \r\n          [space]=\"-6\"\r\n          [startFromZero]=\"false\"\r\n          [clockwise]=\"true\"\r\n          [animation]=\"true\"\r\n          [animateTitle] = \"true\"\r\n          [animateSubtitle] = \"true\"\r\n          [animationDuration]=\"300\"\r\n          [responsive]=\"true\" > \r\n        </circle-progress>\r\n      </div>\r\n      <div class=\"container-text-bottom\">\r\n          <h1 class=\"text-bottom\">\r\n          Total: {{stats.Total}}\r\n          </h1>\r\n      </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 1608:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/status-bar/status-bar.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"status-bar frame\" [ngClass]=\"{'init': state === 0,'stopped': state === 1,'stoppedby': state === 2,'ready': state === 3, 'running': state === 4, 'waiting': state === 5 }\">\r\n    <div class=\"col-1 border\">\r\n      <div class=\"text-container\">\r\n        <p *ngIf=\"po\" class=\"po-name\"><strong>OT: </strong>{{po.name}}</p>\r\n        <h1 *ngIf=\"!po\" class=\"po-name\">No hay orden en proceso</h1>\r\n        <p *ngIf=\"product\" class=\"product-name\"><strong>Producto: </strong>{{product.name}}</p>\r\n        <p *ngIf=\"batch\" class=\"batch-name\"><strong>Lote: </strong>{{batch.name}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-1 border\">\r\n      <div class=\"machine-state-container\">\r\n        <h2 class=\"machine-state\">{{machine_state}}</h2>\r\n      </div>\r\n    </div>\r\n    <div  class=\"col-1\">\r\n      <div class=\"info-container\">\r\n        <h2 class=\"speed\">Velocidad: {{speed}} m/min</h2>\r\n      </div>\r\n    </div>\r\n\r\n</div> ");

/***/ }),

/***/ 3691:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weight-circle/weight-circle.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container-weight frame\" >\r\n  <div class=\"container-text-max\">\r\n      <h1 class=\"text-max\">\r\n          Máximo: {{limits.max}} g\r\n      </h1>\r\n  </div>\r\n  <div class=\"circle-container\">\r\n    <circle-progress\r\n          [percent]=\"weight\"\r\n          [title]=\"weight.toString()\"\r\n          [titleFontSize]=\"titleFontSize\"\r\n          unitsFontSize=\"16\"\r\n          [titleColor]=\"'#bfbfbf'\"\r\n          [unitsColor]=\"'#bfbfbf'\"\r\n          [outerStrokeColor] = \"color()\"\r\n          [outerStrokeGradientStopColor] = \"'#53a9ff'\"\r\n          [innerStrokeColor] = \"'#626567'\"\r\n          units = \" g\"\r\n          [showTitle]=\"true\"\r\n          [showSubtitle]=\"false\"\r\n          [subtitle]=\"'--'\"\r\n          [subtitleColor] = \"'#33FF3C'\"\r\n          [subtitleFontSize] = \"subtitleFontSize\"\r\n          [showUnits]=\"true\"\r\n          [showInnerStroke]=\"true\"\r\n          [showZeroOuterStroke]=\"true\"\r\n          [radius]=\"50\"\r\n          [outerStrokeWidth]=\"6\"\r\n          [innerStrokeWidth]=\"6\" \r\n          [space]=\"-6\"\r\n          [startFromZero]=\"false\"\r\n          [clockwise]=\"true\"\r\n          [animation]=\"true\"\r\n          [animateTitle] = \"true\"\r\n          [animateSubtitle] = \"false\"\r\n          [animationDuration]=\"150\"\r\n          [responsive]=\"true\"\r\n          [subtitleFormat]=\"formatSubtitle\"  >\r\n  \r\n        </circle-progress>\r\n  </div>\r\n  <div class=\"container-text-min\">\r\n      <h1 class=\"text-min\">\r\n          Mínimo: {{limits.min}} g\r\n      </h1>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"header\">\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" slot=\"start\"  fill=\"clear\" mode=\"ios\" (click)=\"logout()\" collapse=\"true\">\r\n      <ion-icon name=\"person-circle-outline\" slot=\"icon-only\"></ion-icon> \r\n      <p class=\"ion-padding-start\">{{userName}}</p>  \r\n    </ion-button>\r\n    <ion-title class=\"center caveat\">Dynamic - QA</ion-title>\r\n    <div class=\"hour-container\">\r\n      <p class=\"hour\">{{time | date: 'd/M/y H:mm'}}</p>\r\n    </div>\r\n    <ion-buttons slot=\"end\" collapse=\"true\" >\r\n      <ion-menu-button color=\"dark\" [disabled]=\"disabled_menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"home-screen\">\r\n  <div class=\"status-bar-container\">\r\n    <app-status-bar class=\"status-bar\" [po]=\"po\" [product]=\"product\" [batch]=\"batch\" [state]=\"machine_state\"></app-status-bar>\r\n  </div>\r\n  <div class=\"background\"></div>\r\n  <ion-grid class=\"home-container-grid\">\r\n    <ion-row class=\"home-container\">\r\n      <ion-col size-md=\"4\" class=\"stats\" >\r\n        <div class=\"stats-frame-container\">\r\n          <app-stats-good-frame [stats]=\"stats\"></app-stats-good-frame>\r\n        </div>\r\n        <div class=\"stats-frame-container\">\r\n          <app-stats-bad-frame [stats]=\"stats\"></app-stats-bad-frame>\r\n        </div>\r\n      </ion-col >\r\n      <ion-col size-md=\"5\" class=\"ion-align-items-center\">\r\n        <div class=\"weight-div\">\r\n          <app-weight-circle [weight]=\"weight\" [result]=\"result\" [limits]=\"limits\"></app-weight-circle>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size-md=\"3\" class=\"list-container\">\r\n        <div>\r\n          <app-list-weight [units]=\"units\"></app-list-weight>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"footer\">\r\n        <div class=\"button-start-container\">\r\n          <div class=\"allerts\">\r\n            <ion-img src=\"assets/attention.svg\"></ion-img>\r\n          </div>\r\n          <div class=\"button-start\" [ngClass]=\"{'red': this.power, 'green': !this.power}\" (click)=\"powerChanged()\">\r\n            <span>{{this.textStartButton}}</span>\r\n          </div>\r\n        </div>\r\n    </div >\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map