(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" [@routerTransition]>\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-4\">\n            <img class=\"user-avatar\" src=\"assets/images/logo.png\" width=\"150px\" />\n            <h1>TimeSheet</h1>\n            <form autocomplete=\"false\" [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-content\">\n                    <div class=\"form-group\" *ngIf=\"!isChange\">\n                        <input type=\"number\" min=\"1\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"employee_id\" placeholder=\"{{ 'Enter Your Emp Id' | translate }}\"\n                            [ngClass]=\"{ 'is-invalid': submitted && (forgotForm.get('employee_id').value.length === 0) }\">\n                        <div *ngIf=\"submitted && (forgotForm.get('employee_id').value.length === 0)\"\n                            class=\"invalid-feedback-show\">\n                            {{ 'Emp Id is required' | translate }}\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"!isChange\">\n                        <select type=\"text\" formControlName=\"security_question_id\"\n                            class=\"form-control input-underline input-lg input-select\"\n                            [ngClass]=\"{ 'is-invalid': submitted && (forgotForm.get('security_question_id').value.length === 0) }\">\n                            <option value=\"\">{{ 'Select the Security Questions' | translate }}</option>\n                            <option *ngFor=\"let securityQuestion of securityQuestions.data\"\n                                [value]=\"securityQuestion.id\">{{securityQuestion.name}}</option>\n                        </select>\n                        <div *ngIf=\"submitted && (forgotForm.get('security_question_id').value.length === 0)\"\n                            class=\"invalid-feedback-show\">\n                            {{ 'Security questions is required' | translate }}\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"!isChange\">\n                        <input type=\"text\" autocomplete=\"false\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"security_question_answer\"\n                            placeholder=\"{{ 'Security Question Answer' | translate }}\"\n                            [ngClass]=\"{ 'is-invalid': submitted && (forgotForm.get('security_question_answer').value.length === 0) }\">\n                        <div *ngIf=\"submitted && (forgotForm.get('security_question_answer').value.length === 0)\"\n                            class=\"invalid-feedback-show\">\n                            {{ 'Security questions answer is required' | translate }}\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"isChange\">\n                        <input type=\"password\" autocomplete=\"false\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"password\" placeholder=\"Password\"\n                            [ngClass]=\"{ 'is-invalid': submitted && (forgotForm.get('password').value.length === 0 || forgotForm.get('password').value.length < 6)}\">\n                        <div *ngIf=\"submitted && (forgotForm.get('password').value.length === 0)\" class=\"invalid-feedback-show\">\n                            {{ 'Password is required' | translate }}</div>\n                        <div *ngIf=\"submitted && (forgotForm.get('password').value.length !== 0 && forgotForm.get('password').value.length < 6)\"\n                            class=\"invalid-feedback-show\">\n                            Password must be 6 Characters\n                        </div>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"isChange\">\n                        <input type=\"password\" class=\"form-control input-underline input-lg\"\n                            formControlName=\"confirm_password\" placeholder=\"Confirm Password\" [ngClass]=\"{ 'is-invalid': (submitted && (forgotForm.get('confirm_password').value.length === 0 || forgotForm.get('password').value !== forgotForm.get('confirm_password').value)) }\">\n                        <div *ngIf=\"submitted && forgotForm.get('confirm_password').value.length >= 6 && (forgotForm.get('password').value !== forgotForm.get('confirm_password').value)\"\n                            class=\"invalid-feedback-show\">\n                            Password and Confirm Password should match.\n                        </div>\n                        <div *ngIf=\"submitted && (forgotForm.get('confirm_password').value.length === 0)\"\n                            class=\"invalid-feedback-show\">\n                            {{ 'Confirm password is required' | translate }}\n                        </div>\n                        <div *ngIf=\"submitted && (forgotForm.get('confirm_password').value.length !== 0 && forgotForm.get('confirm_password').value.length < 6)\"\n                            class=\"invalid-feedback-show\">\n                            Confirm Password must be 6 Characters\n                        </div>\n                    </div>\n                </div>\n                <a class=\"btn rounded-btn\" (click)=\"onSubmit()\">{{ 'Submit' | translate }}</a>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordRoutingModule", function() { return ForgotPasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");




var routes = [
    {
        path: '',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordComponent"]
    }
];
var ForgotPasswordRoutingModule = /** @class */ (function () {
    function ForgotPasswordRoutingModule() {
    }
    ForgotPasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ForgotPasswordRoutingModule);
    return ForgotPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #fff;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #222;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n\n.login-page .user-avatar {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n\n.login-page .input-select option {\n  color: #000;\n}\n\n.login-page .is-invalid {\n  color: #ff0000;\n}\n\n.login-page .is-invalid::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  color: #ff0000;\n}\n\n.login-page .is-invalid:-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  color: #ff0000;\n  opacity: 1;\n}\n\n.login-page .is-invalid::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  color: #ff0000;\n  opacity: 1;\n}\n\n.login-page .is-invalid:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvd29ya3NwYWNlL3RpbWVzaGVldC9jbGllbnQvc3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQVhzQjtFQVl0QixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxVQUFBO0FDRVI7O0FEQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBekNrQjtFQTBDbEIsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQVE7RUFDSSwrQkFBQTtBQ0VaOztBREVJO0VBQ0ksY0FBQTtBQ0FSOztBRENRO0VBQ0ksMENBQUE7QUNDWjs7QURFUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNBWjs7QURHUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNEWjs7QURJUTtFQUNJLDBDQUFBO0FDRlo7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FES0k7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0FDSFI7O0FES0k7RUFDSSxXQUFBO0FDSFI7O0FES0k7RUFDSSxjQUFBO0FDSFI7O0FES0k7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUNIUjs7QURLSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNIUjs7QURLSTtFQUNJLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNIUjs7QURLSTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5sb2dpbi1wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogM2VtO1xuICAgIC5jb2wtbGctNCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5pbnB1dC1sZyB7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgIC5pbnB1dC11bmRlcmxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAwIDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLnJvdW5kZWQtYnRuIHtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgIH1cbiAgICAucm91bmRlZC1idG46aG92ZXIsXG4gICAgLnJvdW5kZWQtYnRuOmZvY3VzLFxuICAgIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4gICAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgLyogRmlyZWZveCAxOC0gKi9cbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIC8qIEZpcmVmb3ggMTkrICovXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgfVxuICAgIC51c2VyLWF2YXRhciB7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgfVxuICAgIC5pbnB1dC1zZWxlY3Qgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC5pcy1pbnZhbGlkIHtcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgfVxuICAgIC5pcy1pbnZhbGlkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgLyogV2ViS2l0LCBCbGluaywgRWRnZSAqL1xuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICB9XG4gICAgLmlzLWludmFsaWQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIE1vemlsbGEgRmlyZWZveCA0IHRvIDE4ICovXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAuaXMtaW52YWxpZDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIE1vemlsbGEgRmlyZWZveCAxOSsgKi9cbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIC5pcy1pbnZhbGlkOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAzZW07XG59XG4ubG9naW4tcGFnZSAuY29sLWxnLTQge1xuICBwYWRkaW5nOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LWxnIHtcbiAgaGVpZ2h0OiA0NnB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kOiAwIDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtdW5kZXJsaW5lOmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ubG9naW4tcGFnZSAucm91bmRlZC1idG4ge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmhvdmVyLFxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmZvY3VzLFxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuOmFjdGl2ZSxcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5sb2dpbi1wYWdlIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmxvZ2luLXBhZ2UgaDEgc21hbGwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLXBhZ2UgLmZvcm0tY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHggMDtcbn1cbi5sb2dpbi1wYWdlIC51c2VyLWF2YXRhciB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtc2VsZWN0IG9wdGlvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmxvZ2luLXBhZ2UgLmlzLWludmFsaWQge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogV2ViS2l0LCBCbGluaywgRWRnZSAqL1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBNb3ppbGxhIEZpcmVmb3ggNCB0byAxOCAqL1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogTW96aWxsYSBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi5sb2dpbi1wYWdlIC5pcy1pbnZhbGlkOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjZmYwMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/services/security-question.service */ "./src/app/api/services/security-question.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_models_security_question_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/models/security-question-list */ "./src/app/api/models/security-question-list.ts");
/* harmony import */ var _api_models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/models/user */ "./src/app/api/models/user.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, formBuilder, securityQuestionService, userService, toastMessage) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.securityQuestionService = securityQuestionService;
        this.userService = userService;
        this.toastMessage = toastMessage;
        this.securityQuestions = new _api_models_security_question_list__WEBPACK_IMPORTED_MODULE_7__["SecurityQuestionList"]();
        this.user = new _api_models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.getSecurityQuestion();
        this.forgotForm = this.formBuilder.group({
            employee_id: [''],
            security_question_id: [''],
            security_question_answer: [''],
            token: [''],
            password: [''],
            confirm_password: ['']
        });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () {
            return this.forgotForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.getSecurityQuestion = function () {
        var _this = this;
        this.securityQuestionService.getSecurityQuestion()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_9__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.securityQuestions = data;
            }
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.cleanForm();
        this.submitted = true;
        setTimeout(function () {
            if (document.getElementsByClassName('invalid-feedback-show').length > 0) {
                return;
            }
            _this.userService.forgotPassword(_this.forgotForm)
                .subscribe(function (response) {
                _this.serviceResponse = response;
                if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_9__["AppConst"].SERVICE_STATUS.SUCCESS) {
                    _this.submitted = false;
                    _this.user = _this.serviceResponse.data;
                    _this.toastMessage.success(null, _this.serviceResponse.statusMessage);
                    if (_this.serviceResponse.token) {
                        _this.isChange = true;
                        _this.forgotForm.controls['token'].setValue(_this.serviceResponse.token);
                    }
                    else {
                        _this.router.navigate(['/login']);
                    }
                }
                else {
                    _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
                }
            });
        }, 100);
    };
    ForgotPasswordComponent.prototype.cleanForm = function () {
        /* Object.keys(this.forgotForm.controls).forEach((key) =>
          console.log((this.forgotForm.get(key).value !== null) ?
          this.forgotForm.get(key).value.trim() : this.forgotForm.get(key).value));*/
        // Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
        // Object.keys(this.f).forEach((key) => (key !== 'security_question_id') ? this.f[key].setValue(this.forgotForm.value.key) : '');
        // Object.keys(this.f).forEach((key) => console.log(this.forgotForm.get(key).value));
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_5__["SecurityQuestionService"] },
        { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__["ToastMessage"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_5__["SecurityQuestionService"],
            _api_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__["ToastMessage"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/security-question.service */ "./src/app/api/services/security-question.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");










var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ],
            providers: [
                _api_services_security_question_service__WEBPACK_IMPORTED_MODULE_6__["SecurityQuestionService"],
                _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_9__["ToastMessage"]
            ]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
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
//# sourceMappingURL=forgot-password-forgot-password-module.js.map