(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Change Password'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <form [formGroup]=\"updateForm\" (ngSubmit)=\"onSubmit()\" class=\"col-sm-6\">\n    <div class=\"form-group\">\n      <input type=\"password\" autocomplete=\"false\" class=\"form-control input-underline input-lg\"\n        formControlName=\"password\" placeholder=\"Password\"\n        [ngClass]=\"{ 'is-invalid': submitted && (updateForm.get('password').value.length === 0 || updateForm.get('password').value.length < 6)}\">\n      <div *ngIf=\"submitted && (updateForm.get('password').value.length === 0)\" class=\"invalid-feedback-show\">\n        {{ 'Password is required' | translate }}</div>\n      <div\n        *ngIf=\"submitted && (updateForm.get('password').value.length !== 0 && updateForm.get('password').value.length < 6)\"\n        class=\"invalid-feedback-show\">\n        Password must be 6 Characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control input-underline input-lg\" formControlName=\"confirm_password\"\n        placeholder=\"Confirm Password\"\n        [ngClass]=\"{ 'is-invalid': (submitted && (updateForm.get('confirm_password').value.length === 0 || updateForm.get('password').value !== updateForm.get('confirm_password').value)) }\">\n      <div\n        *ngIf=\"submitted && updateForm.get('confirm_password').value.length >= 6 && (updateForm.get('password').value !== updateForm.get('confirm_password').value)\"\n        class=\"invalid-feedback-show\">\n        Password and Confirm Password should match.\n      </div>\n      <div *ngIf=\"submitted && (updateForm.get('confirm_password').value.length === 0)\"\n        class=\"invalid-feedback-show\">\n        {{ 'Confirm password is required' | translate }}\n      </div>\n      <div\n        *ngIf=\"submitted && (updateForm.get('confirm_password').value.length !== 0 && updateForm.get('confirm_password').value.length < 6)\"\n        class=\"invalid-feedback-show\">\n        Confirm Password must be 6 Characters\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/change-password/change-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRoutingModule", function() { return ChangePasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.component */ "./src/app/change-password/change-password.component.ts");




var routes = [
    {
        path: '',
        component: _change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]
    }
];
var ChangePasswordRoutingModule = /** @class */ (function () {
    function ChangePasswordRoutingModule() {
    }
    ChangePasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChangePasswordRoutingModule);
    return ChangePasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, userService, toastMessage) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.toastMessage = toastMessage;
        this.submitted = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.updateFormInit();
    };
    ChangePasswordComponent.prototype.updateFormInit = function () {
        this.updateForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, { validator: this.pwdMatchValidator });
    };
    ChangePasswordComponent.prototype.pwdMatchValidator = function (frm) {
        return frm.get('password').value === frm.get('confirm_password').value
            ? null : { invalid: true };
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () {
            return this.updateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        setTimeout(function () {
            if (_this.updateForm.invalid && document.getElementsByClassName('invalid-feedback-show').length > 0) {
                return;
            }
            _this.userService.changePassword(_this.updateForm)
                .subscribe(function (response) {
                _this.serviceResponse = response;
                if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                    _this.submitted = false;
                    _this.updateForm.controls['password'].setValue('');
                    _this.updateForm.controls['confirm_password'].setValue('');
                    _this.toastMessage.success(null, _this.serviceResponse.statusMessage);
                }
                else {
                    _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
                }
            });
        }, 100);
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__["ToastMessage"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__["ToastMessage"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");










var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _change_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [
                _api_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_9__["ToastMessage"]
            ]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, noTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTransition", function() { return noTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function routerTransition() {
    return noTransition();
}
function noTransition() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', []);
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/utils/app-const.ts":
/*!************************************!*\
  !*** ./src/app/utils/app-const.ts ***!
  \************************************/
/*! exports provided: AppConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConst", function() { return AppConst; });
var AppConst = /** @class */ (function () {
    function AppConst() {
    }
    AppConst.STORE_API_PATHS = {
        SECURITYQUESTION: '/security_question',
        REGISTER: '/register',
        LOGIN: '/login',
        ROLE: '/role',
        USER: '/users',
        USERBYID: '/user',
        MANAGERS: '/managers',
        INFRATOWER: '/infra_tower',
        PROJECT: '/project',
        PROJECT_INFRA_TOWER: '/projectInfra',
        PROJECT_INFRA_TOWER_LIST: '/projectInfra/list',
        PROJECTLIST: '/project/list',
        INFRATOWERLIST: '/infra_tower/list',
        DEFAULTTIMESHEET: '/default_time_sheet',
        DAILYTIMESHEET: '/daily_time_sheet',
        FORGETPASSWORD: '/forgot_password',
        CHANGEPASSWORD: '/change_password',
        EXPORTTIMESHEET: '/export_time_sheet'
    };
    AppConst.SERVICE_STATUS = {
        SUCCESS: 'success',
        FAILED: 'failed'
    };
    AppConst.BAU = [
        {
            id: 0,
            name: 'Select BAU',
            value: 0
        },
        {
            id: 1,
            name: 'Full Day Billable',
            value: 8
        },
        {
            id: 2,
            name: 'Half Day Billable',
            value: 4
        },
        {
            id: 3,
            name: 'Full Day Non Billable',
            value: 8
        },
        {
            id: 4,
            name: 'Half Day Non Billable',
            value: 4
        },
        {
            id: 5,
            name: 'Planned Leave',
            value: 0
        },
        {
            id: 6,
            name: 'Emergency Leave',
            value: 0
        },
        {
            id: 7,
            name: 'Sick Leave',
            value: 0
        },
        {
            id: 8,
            name: 'Week-off / Weekend',
            value: 0
        },
        {
            id: 9,
            name: 'Holiday',
            value: 0
        }
    ];
    AppConst.OT_PLANNED = [
        {
            id: 0,
            name: 'No'
        },
        {
            id: 1,
            name: 'Yes'
        }
    ];
    AppConst.OT_UNPLANNED = [{
            id: 0,
            name: 'No'
        },
        {
            id: 1,
            name: 'Yes'
        }];
    AppConst.SHORE_TYPE = [{
            id: 0,
            name: 'Offshore'
        },
        {
            id: 1,
            name: 'Onshore'
        }];
    AppConst.MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    AppConst.WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return AppConst;
}());



/***/ }),

/***/ "./src/app/utils/toast-message.ts":
/*!****************************************!*\
  !*** ./src/app/utils/toast-message.ts ***!
  \****************************************/
/*! exports provided: ToastMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastMessage", function() { return ToastMessage; });
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");

var ToastMessage = /** @class */ (function () {
    function ToastMessage(toastr) {
        this.toastr = toastr;
        this.toastConfig = {
            timeOut: 3000,
            autoDismiss: true,
            positionClass: 'toast-top-center'
        };
    }
    ToastMessage.prototype.success = function (message, title) {
        this.toastr.success(message, title, this.toastConfig);
    };
    ToastMessage.prototype.error = function (message, title) {
        this.toastr.error(message, title, this.toastConfig);
    };
    ToastMessage.prototype.warning = function (message, title) {
        this.toastr.warning(message, title, this.toastConfig);
    };
    ToastMessage.prototype.info = function (message, title) {
        this.toastr.info(message, title, this.toastConfig);
    };
    ToastMessage.prototype.show = function (message, title) {
        this.toastr.show(message, title, this.toastConfig);
    };
    ToastMessage.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_0__["ToastrService"] }
    ]; };
    return ToastMessage;
}());



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map