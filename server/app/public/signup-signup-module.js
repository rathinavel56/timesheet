(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"assets/images/logo.png\" width=\"150px\" />\n            <h1>TimeSheet</h1>\n            <form autocomplete=\"false\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\">\n                        <input type=\"number\" min=\"1\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"employee_id\" placeholder=\"{{ 'Enter Your Emp Id' | translate }}\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.employee_id.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"1\">\n                        <div *ngIf=\"submitted && !!f.employee_id?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.employee_id?.errors.required\">{{ 'Emp Id is required' | translate }}</div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-underline input-lg\" formControlName=\"name\"\n                            placeholder=\"{{ 'Enter Your Emp Name' | translate }}\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"2\">\n                        <div *ngIf=\"submitted && !!f.name?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.name?.errors.required\">{{ 'Emp name is required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <select type=\"text\" formControlName=\"shore_type\"\n                            class=\"form-control input-underline input-lg input-select\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.shore_type.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"3\">\n                            <option value=\"\">{{ 'Select the shore type' | translate }}</option>\n                            <option *ngFor=\"let shoreType of shoreTypes\"\n                                [value]=\"shoreType.id\">{{shoreType.name}}</option>\n                        </select>\n                        <div *ngIf=\"submitted && !!f.shore_type?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.shore_type?.errors.required\">\n                                {{ 'Shore Type is required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <select type=\"text\" formControlName=\"security_question_id\"\n                            class=\"form-control input-underline input-lg input-select\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.security_question_id.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"4\">\n                            <option value=\"\">{{ 'Select the Security Questions' | translate }}</option>\n                            <option *ngFor=\"let securityQuestion of securityQuestions.data\"\n                                [value]=\"securityQuestion.id\">{{securityQuestion.name}}</option>\n                        </select>\n                        <div *ngIf=\"submitted && !!f.security_question_id?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.security_question_id?.errors.required\">\n                                {{ 'Security questions is required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" autocomplete=\"false\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"security_question_answer\"\n                            placeholder=\"{{ 'Security Question Answer' | translate }}\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.security_question_answer.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"5\">\n                        <div *ngIf=\"submitted && !!f.security_question_answer?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.security_question_answer.errors?.required\">\n                                {{ 'Security questions answer is required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <select type=\"text\" formControlName=\"manager_id\"\n                            class=\"form-control input-underline input-lg input-select\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.manager_id.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"6\">\n                            <option value=\"\" selected>Select Manager</option>\n                            <option *ngFor=\"let manager of managers\" [value]=\"manager.id\">{{ manager.name }}</option>\n                        </select>\n                        <div *ngIf=\"submitted && !!f.manager_id?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.manager_id.errors?.required\">\n                                {{ 'Manager is required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <select type=\"text\" formControlName=\"project_id\"\n                            class=\"form-control input-underline input-lg input-select\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.project_id.errors }\"\n                            (change)=\"getInfraTowers($event.target.value)\" (keydown)=\"onKeydown($event)\" tabindex=\"7\">\n                            <option value=\"\" selected>Select Project</option>\n                            <option *ngFor=\"let project of projects\" [value]=\"project._id\">{{project.name}}</option>\n                        </select>\n                        <div *ngIf=\"submitted && !!f.project_id?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.project_id.errors?.required\">\n                                {{ 'Project is required' | translate }}</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"infraTowers.length > 0\" >\n                        <select type=\"text\" formControlName=\"infra_tower_id\"\n                            class=\"form-control input-underline input-lg input-select\" [ngClass]=\"{ 'is-invalid': submitted && (infraTowers.length > 0 && registerForm.get('infra_tower_id').value === '') }\" (keydown)=\"onKeydown($event)\" tabindex=\"8\">\n                            <option value=\"\" selected>Select Infra Tower</option>\n                            <option *ngFor=\"let infraTower of infraTowers\" [value]=\"infraTower._id\">{{infraTower.name}}\n                            </option>\n                        </select>\n                        <div *ngIf=\"submitted && (infraTowers.length > 0 && registerForm.get('infra_tower_id').value === '')\" class=\"invalid-feedback-show\">\n                            {{ 'Infra Tower is required' | translate }}\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" autocomplete=\"false\" class=\"form-control input-underline input-lg\" formControlName=\"password\"\n                            placeholder=\"{{ 'Password' | translate }}\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" (keydown)=\"onKeydown($event)\" tabindex=\"9\">\n                        <div *ngIf=\"submitted && !!f.password?.errors\" class=\"invalid-feedback-show\">\n                            <div *ngIf=\"!!f.password?.errors.required\">{{ 'Password is required' | translate }}</div>\n                        </div>\n                        <div *ngIf=\"submitted && (registerForm.get('password').value.length !== 0 && registerForm.get('password').value.length < 6)\"\n                            class=\"invalid-feedback-show\">\n                            Password must be 6 Characters\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"confirm_password\" placeholder=\"{{ 'Confirm Password' | translate }}\"  [ngClass]=\"{ 'is-invalid': (submitted && (registerForm.get('confirm_password').value.length === 0 || registerForm.get('password').value !== registerForm.get('confirm_password').value)) }\" (keydown)=\"onKeydown($event)\" tabindex=\"10\">\n                        <div *ngIf=\"submitted && registerForm.get('confirm_password').value.length >= 6 && (registerForm.get('password').value !== registerForm.get('confirm_password').value)\"\n                            class=\"invalid-feedback-show\">\n                            Password and Confirm Password should match.\n                        </div>\n                        <div *ngIf=\"submitted && (registerForm.get('confirm_password').value.length === 0)\"\n                            class=\"invalid-feedback-show\">\n                            {{ 'Confirm password is required' | translate }}\n                        </div>\n                        <div *ngIf=\"submitted && (registerForm.get('confirm_password').value.length !== 0 && registerForm.get('confirm_password').value.length < 6)\"\n                            class=\"invalid-feedback-show\">\n                            Confirm Password must be 6 Characters\n                        </div>\n                    </div>\n                </div>\n                <a class=\"btn rounded-btn\" (keydown)=\"onKeydown($event)\" tabindex=\"11\" (click)=\"onSubmit()\">{{ 'Register' | translate }}</a>&nbsp;\n                <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\" tabindex=\"12\">{{ 'Log in' | translate }}</a>\n            </form>\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");




var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #fff;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #222;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n\n.login-page .user-avatar {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\n.login-page .input-select option {\n  color: #000;\n}\n\n.login-page .is-invalid {\n  color: #ff0000;\n}\n\n.login-page .is-invalid::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  color: #ff0000;\n}\n\n.login-page .is-invalid:-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  color: #ff0000;\n  opacity: 1;\n}\n\n.login-page .is-invalid::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  color: #ff0000;\n  opacity: 1;\n}\n\n.login-page .is-invalid:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvd29ya3NwYWNlL3RpbWVzaGVldC9jbGllbnQvc3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQVhzQjtFQVl0QixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0FDRVI7O0FEQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBekNrQjtFQTBDbEIsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQVE7RUFDSSwrQkFBQTtBQ0VaOztBREVJO0VBQ0ksY0FBQTtBQ0FSOztBRENRO0VBQ0ksMENBQUE7QUNDWjs7QURFUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNBWjs7QURHUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNEWjs7QURJUTtFQUNJLDBDQUFBO0FDRlo7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FES0k7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0FDSFI7O0FES0k7RUFDSSxXQUFBO0FDSFI7O0FES0k7RUFDSSxjQUFBO0FDSFI7O0FES0k7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUNIUjs7QURLSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNIUjs7QURLSTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNIUjs7QURLSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbi1wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogM2VtO1xuICAgIC5jb2wtbGctNCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5pbnB1dC1sZyB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgIC5pbnB1dC11bmRlcmxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLnJvdW5kZWQtYnRuIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgIH1cbiAgICAucm91bmRlZC1idG46aG92ZXIsXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxuICAgIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4gICAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOC0gKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgfVxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxuICAgIC5pbnB1dC1zZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC5pcy1pbnZhbGlkIHtcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgfVxuICAgIC5pcy1pbnZhbGlkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgLyogV2ViS2l0LCBCbGluaywgRWRnZSAqL1xuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICB9XG4gICAgLmlzLWludmFsaWQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuaXMtaW52YWxpZDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5pcy1pbnZhbGlkOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzZW07XG59XG4ubG9naW4tcGFnZSAuY29sLWxnLTQge1xuICBwYWRkaW5nOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LWxnIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kOiAwIDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtdW5kZXJsaW5lOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ubG9naW4tcGFnZSAucm91bmRlZC1idG4ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmhvdmVyLFxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmZvY3VzLFxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5sb2dpbi1wYWdlIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmxvZ2luLXBhZ2UgaDEgc21hbGwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi5sb2dpbi1wYWdlIC51c2VyLWF2YXRhciB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtc2VsZWN0IG9wdGlvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmxvZ2luLXBhZ2UgLmlzLWludmFsaWQge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogV2ViS2l0LCBCbGluaywgRWRnZSAqL1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjZmYwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/services/security-question.service */ "./src/app/api/services/security-question.service.ts");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");
/* harmony import */ var _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/services/infra-tower.service */ "./src/app/api/services/infra-tower.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_models_security_question_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/models/security-question-list */ "./src/app/api/models/security-question-list.ts");
/* harmony import */ var _api_models_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/models/user */ "./src/app/api/models/user.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, formBuilder, securityQuestionService, projectService, infraTowerService, userService, toastMessage) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.securityQuestionService = securityQuestionService;
        this.projectService = projectService;
        this.infraTowerService = infraTowerService;
        this.userService = userService;
        this.toastMessage = toastMessage;
        this.securityQuestions = new _api_models_security_question_list__WEBPACK_IMPORTED_MODULE_9__["SecurityQuestionList"]();
        this.user = new _api_models_user__WEBPACK_IMPORTED_MODULE_10__["User"]();
        this.projects = [];
        this.infraTowers = [];
        this.managers = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getSecurityQuestion();
        this.findAllManagers();
        this.getProjects();
        this.registerForm = this.formBuilder.group({
            employee_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            shore_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            manager_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            project_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            infra_tower_id: [''],
            security_question_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            security_question_answer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]]
        }, { validator: this.pwdMatchValidator });
        this.shoreTypes = _utils_app_const__WEBPACK_IMPORTED_MODULE_11__["AppConst"].SHORE_TYPE;
    };
    SignupComponent.prototype.getSecurityQuestion = function () {
        var _this = this;
        this.securityQuestionService.getSecurityQuestion()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_11__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.securityQuestions = data;
            }
        });
    };
    SignupComponent.prototype.findAllManagers = function () {
        var _this = this;
        this.userService.findAllManagers()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_11__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.managers = _this.serviceResponse.data;
                _this.registerForm.controls['manager_id'].setValue('');
            }
        });
    };
    SignupComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.findList()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_11__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.projects = _this.serviceResponse.data;
                _this.registerForm.controls['project_id'].setValue('');
                if (_this.projects.length) {
                    _this.getInfraTowers(_this.projects[0]._id);
                }
            }
        });
    };
    SignupComponent.prototype.getInfraTowers = function (project_id) {
        var _this = this;
        this.infraTowerService.findList(this.querParams({ project_id: project_id }))
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_11__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.infraTowers = _this.serviceResponse.data;
                _this.registerForm.controls['infra_tower_id'].setValue('');
            }
        });
    };
    SignupComponent.prototype.querParams = function (object) {
        return Object.entries(object).map(function (_a) {
            var key = _a[0], val = _a[1];
            return key + "=" + val;
        }).join('&');
    };
    SignupComponent.prototype.pwdMatchValidator = function (frm) {
        return frm.get('password').value === frm.get('confirm_password').value
            ? null : { invalid: true };
    };
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "confirm_password", {
        get: function () { return this.registerForm.get('confirm_password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cleanForm();
        this.submitted = true;
        if (this.registerForm.invalid || (this.infraTowers.length > 0 && this.registerForm.get('infra_tower_id').value.length === '')) {
            return;
        }
        delete this.registerForm.value.confirm_password;
        this.userService.register(this.registerForm)
            .subscribe(function (response) {
            _this.serviceResponse = response;
            _this.submitted = false;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_11__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.user = _this.serviceResponse.data;
                _this.toastMessage.success(null, _this.serviceResponse.statusMessage);
                sessionStorage.setItem('timeSheet', JSON.stringify(_this.user));
                if (_this.serviceResponse.data.user.role === 'Admin') {
                    _this.router.navigate(['/settings']);
                }
                else {
                    _this.router.navigate(['/mywork']);
                }
            }
            else {
                _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
            }
        });
    };
    SignupComponent.prototype.cleanForm = function () {
        /* Object.keys(this.registerForm.controls).forEach((key) =>
          console.log((this.registerForm.get(key).value !== null) ?
          this.registerForm.get(key).value.trim() : this.registerForm.get(key).value));*/
        // Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
        // Object.keys(this.f).forEach((key) => (key !== 'security_question_id') ? this.f[key].setValue(this.registerForm.value.key) : '');
        // Object.keys(this.f).forEach((key) => console.log(this.registerForm.get(key).value));
    };
    SignupComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            this.onSubmit();
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_5__["SecurityQuestionService"] },
        { type: _api_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] },
        { type: _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_7__["InfraTowerService"] },
        { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__["ToastMessage"] }
    ]; };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_5__["SecurityQuestionService"],
            _api_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_7__["InfraTowerService"],
            _api_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__["ToastMessage"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/services/security-question.service */ "./src/app/api/services/security-question.service.ts");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");
/* harmony import */ var _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/services/infra-tower.service */ "./src/app/api/services/infra-tower.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");












var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [
                _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_8__["SecurityQuestionService"],
                _api_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"],
                _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_10__["InfraTowerService"],
                _api_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_5__["ToastMessage"]
            ],
            declarations: [
                _signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



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
//# sourceMappingURL=signup-signup-module.js.map