(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywork-mywork-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mywork/mywork.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mywork/mywork.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n        <app-page-header [heading]=\"headerString\" [icon]=\"'fa-edit'\"></app-page-header>\n        <table id=\"timeSheetFill\" class=\"table table-striped table-bordered\">\n                <thead *ngIf=\"dailyTimeSheet\">\n                        <tr>\n                                <th colspan=\"8\">\n                                        <table class=\"table100\">\n                                                <tr>\n                                                        <td>\n                                                                <form [formGroup]=\"timeSheetSearchForm\"\n                                                                        (ngSubmit)=\"onSearch()\">\n                                                                        <div class=\"form-group\">\n                                                                                <strong>Select Date To Fill Time Sheet:\n                                                                                </strong>\n                                                                                <div\n                                                                                        class=\"input-group datepicker-input col-sm-6\">\n                                                                                        <input class=\"form-control\"\n                                                                                                placeholder=\"yyyy-mm-dd\"\n                                                                                                name=\"dp\" ngbDatepicker\n                                                                                                #d=\"ngbDatepicker\"\n                                                                                                [minDate]=\"minDate\"\n                                                                                                [maxDate]=\"maxDate\"\n                                                                                                formControlName=\"timeSheetDate\" />\n                                                                                        <button class=\"input-group-addon\"\n                                                                                                (click)=\"d.toggle()\"\n                                                                                                type=\"button\">\n                                                                                                <span\n                                                                                                        class=\"fa fa-calendar\"></span>\n                                                                                        </button>\n                                                                                </div>\n                                                                        </div>\n                                                                        &nbsp;&nbsp;&nbsp;&nbsp;<button\n                                                                                class=\"btn btn-primary\" type=\"submit\">\n                                                                                Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;<button\n                                                                                class=\"btn btn-success\" type=\"button\"\n                                                                                (click)=\"getDefaultTimeSheet()\">\n                                                                                Fill Default Settings\n                                                                        </button>\n                                                                </form>\n                                                        </td>\n                                                        <td>\n                                                                <table class=\"table100\">\n                                                                        <tr><td><label>Manager</label></td><td>{{ managerName }}</td></tr>\n                                                                        <tr><td><label>Project</label></td><td>{{ projectName }}</td></tr>\n                                                                        <tr><td><label>Infra Tower</label></td><td>{{ infraName }}</td></tr>\n                                                                </table>        \n                                                        </td>\n                                                </tr>\n                                        </table>\n                                </th>\n                        </tr>\n                </thead>\n                <tr>\n                        <td colspan=\"8\" [formGroup]=\"timeSheetForm\">\n                                <div class=\"card bg-light margin-top-23\" formArrayName=\"timesheets\" *ngFor=\"\n                        let timeSheetFill of timeSheetForm.get('timesheets')[\n                            'controls'\n                        ];\n                        let i = index\n                    \">\n                                        <div class=\"card-body\" [formGroupName]=\"i\">\n                                                <table formArrayName=\"days\" class=\"table100\">\n                                                        <tr>\n                                                                <th>Date</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        {{ day.get(\"name\").value }}\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>BAU</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <select class=\"form-control\"\n                                                                                formControlName=\"bau\" (keydown)=\"onKeydown($event)\">\n                                                                                <option *ngFor=\"let bau of baus\"\n                                                                                        [value]=\"bau.id\">\n                                                                                        {{ bau.name }}</option>\n                                                                        </select>\n                                                                        <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            i === 0 &&\n                                            day.get('bau').value === 0\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Required\n                                                                        </div>\n                                                                        <!-- <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('addtion_hours_planned')\n                                                .value +\n                                                day.get(\n                                                    'addtion_hours_unplanned'\n                                                ).value +\n                                                getBauHours(\n                                                    day.get('bau').value\n                                                ) >\n                                                24\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Entered Hour is greater than 24 Hours\n                                                                        </div> -->\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>OT Planned</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <select formControlName=\"ot_planned\"\n                                                                                class=\"form-control\" (keydown)=\"onKeydown($event)\">\n                                                                                <option *ngFor=\"let ot of otPlanned\"\n                                                                                        [value]=\"ot.id\">\n                                                                                        {{ ot.name }}</option>\n                                                                        </select>\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>OT Planned Hours</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <input class=\"form-control\" type=\"number\"\n                                                                                min=\"1\" max=\"24\"\n                                                                                (keypress)=\"numberOnly($event)\"\n                                                                                formControlName=\"addtion_hours_planned\"\n                                                                                [readonly]=\"\n                                            day.get('ot_planned').value === 0\n                                        \" (keydown)=\"onKeydown($event)\"/>\n                                                                        <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('ot_planned').value > 0 &&\n                                            day.get('addtion_hours_planned')\n                                                .value === ''\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Required\n                                                                        </div>\n                                                                        <!-- <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('ot_planned').value === 1 &&\n                                            day.get('addtion_hours_planned')\n                                                .value +\n                                                day.get(\n                                                    'addtion_hours_unplanned'\n                                                ).value +\n                                                getBauHours(\n                                                    day.get('bau').value\n                                                ) >\n                                                24\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Entered Hour is greater than 24 Hours\n                                                                        </div> -->\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>OT Planned Hours Description</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <input class=\"form-control\" type=\"text\"\n                                                                                formControlName=\"addtion_hours_desc_planned\"\n                                                                                [readonly]=\"\n                                            day.get('ot_planned').value === 0\n                                        \" (keydown)=\"onKeydown($event)\"/>\n                                                                        <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('ot_planned').value > 0 &&\n                                            day.get(\n                                                'addtion_hours_desc_planned'\n                                            ).value === ''\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Required\n                                                                        </div>\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>OT Unplanned</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <select formControlName=\"ot_unplanned\"\n                                                                                class=\"form-control\" (keydown)=\"onKeydown($event)\">\n                                                                                <option *ngFor=\"let ot of otUnplanned\"\n                                                                                        [value]=\"ot.id\">\n                                                                                        {{ ot.name }}</option>\n                                                                        </select>\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>OT Unplanned Hours</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <input class=\"form-control\" type=\"number\"\n                                                                                min=\"1\" max=\"24\"\n                                                                                (keypress)=\"numberOnly($event)\"\n                                                                                formControlName=\"addtion_hours_unplanned\"\n                                                                                [readonly]=\"\n                                            day.get('ot_unplanned').value === 0\n                                        \" (keydown)=\"onKeydown($event)\"/>\n                                                                        <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('ot_unplanned').value > 0 &&\n                                            day.get('addtion_hours_unplanned')\n                                                .value === ''\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Required\n                                                                        </div>\n                                                                        <!-- <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('ot_unplanned').value ===\n                                                1 &&\n                                            day.get('addtion_hours_planned')\n                                                .value +\n                                                day.get(\n                                                    'addtion_hours_unplanned'\n                                                ).value +\n                                                getBauHours(\n                                                    day.get('bau').value\n                                                ) >\n                                                24\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Entered Hour is greater than 24 Hours\n                                                                        </div> -->\n                                                                </th>\n                                                        </tr>\n                                                        <tr>\n                                                                <th>OT Unplanned Hours Description</th>\n                                                                <th *ngFor=\"\n                                        let day of timeSheetFill.get('days')[\n                                            'controls'\n                                        ];\n                                        let j = index\n                                    \" [formGroupName]=\"j\">\n                                                                        <input class=\"form-control\" type=\"text\"\n                                                                                formControlName=\"addtion_hours_desc_unplanned\"\n                                                                                [readonly]=\"\n                                            day.get('ot_unplanned').value === 0\n                                        \" (keydown)=\"onKeydown($event)\"/>\n                                                                        <div *ngIf=\"\n                                            timeSheetFormSubmitted &&\n                                            day.get('ot_unplanned').value > 0 &&\n                                            day.get(\n                                                'addtion_hours_desc_unplanned'\n                                            ).value === ''\n                                        \" class=\"invalid-feedback-show\">\n                                                                                Required\n                                                                        </div>\n                                                                </th>\n                                                        </tr>\n                                                </table>\n                                        </div>\n                                        <br />\n                                </div>\n                                <p class=\"text-center\">\n                                        <br /><button type=\"button\" (keydown)=\"onKeydown($event)\" [disabled]=\"!submitTimeSheet\"\n                                                class=\"btn btn-primary\" (click)=\"onSubmit()\">\n                                                Submit\n                                        </button>\n                                </p>\n                        </td>\n                </tr>\n        </table>\n\n        <table id=\"timeSheet\" class=\"table table-striped table-bordered table100\" *ngIf=\"dailyTimeSheet\">\n                <thead>\n                        <tr>\n                                <th>Date</th>\n                                <th>Name</th>\n                                <th>On/Off Shore</th>\n                                <th>Manager</th>\n                                <th>Project</th>\n                                <th>Infra Tower</th>\n                                <th>Billabe Hours</th>\n                                <th>Non Billabe Hours</th>\n                                <th>Ot Planned Hours</th>\n                                <th>Ot Planned Description</th>\n                                <th>Ot Unplanned Hours</th>\n                                <th>Ot Unplanned Description</th>\n                                <th>Leave Type</th>\n                        </tr>\n                </thead>\n                <tbody>\n                        <tr *ngFor=\"\n                    let timeSheet of timeSheets\n                        | paginate\n                            : {\n                                  id: 'paginationControlsId',\n                                  itemsPerPage: itemPerPageIndex,\n                                  currentPage: currentPageIndex,\n                                  totalItems: totalRecords\n                              }\n                \">\n                                <th>{{ dateFormat(timeSheet.date) | date: \"dd/MM/yyyy\" }}</th>\n                                <th>{{ (timeSheet.user.length > 0) ? timeSheet.user[0].name: 'N/A'}}</th>\n                                <th>{{ (timeSheet.shore_type === 0) ? 'OffShore': 'Onshore' }}</th>\n                                <th>{{ (timeSheet.manager.length > 0) ? timeSheet.manager[0].name: 'N/A'}}</th>\n                                <th>{{ (timeSheet.project.length > 0) ? timeSheet.project[0].name: 'N/A'}}</th>\n                                <th>{{ (timeSheet.infra.length > 0) ? timeSheet.infra[0].name: 'N/A'}}</th>\n                                <th>{{ (timeSheet.billed_hour > 0) ? timeSheet.billed_hour: 'N/A' }}</th>\n                                <th>{{ (timeSheet.non_billed_hour > 0) ? timeSheet.non_billed_hour: 'N/A' }}</th>\n                                <th>{{ (timeSheet.addtion_hours_planned > 0) ? timeSheet.addtion_hours_planned: 'N/A' }}</th>\n                                <th>{{ (timeSheet.addtion_hours_desc_planned !== '') ? timeSheet.addtion_hours_desc_planned: 'N/A' }}</th>\n                                <th>{{ (timeSheet.addtion_hours_unplanned > 0) ? timeSheet.addtion_hours_unplanned: 'N/A' }}</th>\n                                <th>{{ (timeSheet.addtion_hours_desc_unplanned !== '') ? timeSheet.addtion_hours_desc_unplanned: 'N/A' }}</th>\n                                <th>{{ (timeSheet.bau > 4) ? getBau(timeSheet.bau): 'N/A' }}</th>\n                        </tr>\n                        <tr *ngIf=\"!timeSheets.length\">\n                                <td colspan=\"13\">\n                                        No Records found.\n                                </td>\n                        </tr>\n                </tbody>\n                <tfoot *ngIf=\"totalRecords > itemPerPageIndex\">\n                        <tr>\n                                <td colspan=\"13\">\n                                        <pagination-controls id=\"paginationControlsId\"\n                                                (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n                                                autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\"\n                                                nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n                                                screenReaderPageLabel=\"page\">\n                                        </pagination-controls>\n                                </td>\n                        </tr>\n                </tfoot>\n        </table>\n</div>\n"

/***/ }),

/***/ "./src/app/mywork/mywork-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mywork/mywork-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MyworkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkRoutingModule", function() { return MyworkRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mywork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mywork.component */ "./src/app/mywork/mywork.component.ts");




var routes = [
    {
        path: '',
        component: _mywork_component__WEBPACK_IMPORTED_MODULE_3__["MyworkComponent"]
    }
];
var MyworkRoutingModule = /** @class */ (function () {
    function MyworkRoutingModule() {
    }
    MyworkRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MyworkRoutingModule);
    return MyworkRoutingModule;
}());



/***/ }),

/***/ "./src/app/mywork/mywork.component.scss":
/*!**********************************************!*\
  !*** ./src/app/mywork/mywork.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215d29yay9teXdvcmsuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mywork/mywork.component.ts":
/*!********************************************!*\
  !*** ./src/app/mywork/mywork.component.ts ***!
  \********************************************/
/*! exports provided: MyworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkComponent", function() { return MyworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _api_services_time_sheet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/time-sheet.service */ "./src/app/api/services/time-sheet.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var MyworkComponent = /** @class */ (function () {
    function MyworkComponent(router, formBuilder, toastMessage, userService, timeSheetService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastMessage = toastMessage;
        this.userService = userService;
        this.timeSheetService = timeSheetService;
        this.fillTimeSheets = [];
        this.timeSheets = [];
        this.currentPageIndex = 1;
        this.totalRecords = 0;
        this.submitTimeSheet = true;
        this.timeSheetFormSubmitted = false;
        this.dailyTimeSheet = false;
        this.defaultTimeSheet = false;
        this.headerString = 'Enter Your Time Sheet Detail';
        this.managerName = 'N/A';
        this.projectName = 'N/A';
        this.infraName = 'N/A';
        var currentDate = new Date();
        this.minDate = { year: currentDate.getFullYear() - 1, month: 12, day: 1 };
        this.maxDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
        this.baus = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].BAU;
        this.otPlanned = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].OT_PLANNED;
        this.otUnplanned = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].OT_UNPLANNED;
        this.timeSheetSearchForm = this.formBuilder.group({
            timeSheetDate: [this.maxDate]
        });
        if (this.router.url === '/mywork') {
            this.dailyTimeSheet = true;
            this.currentDate = new Date(this.maxDate.year, (this.maxDate.month - 1), this.maxDate.day);
            this.getUserById();
        }
        else {
            this.headerString = 'Enter Your Default Time Sheet Detail';
            this.currentDate = new Date(1920, 1, 3);
        }
        this.getStartEnd(this.currentDate);
        this.getTimeSheet('', '');
    }
    MyworkComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    MyworkComponent.prototype.initForm = function () {
        this.timeSheetForm = this.formBuilder.group({
            timesheets: this.formBuilder.array([])
        });
    };
    MyworkComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    MyworkComponent.prototype.getDefaultTimeSheet = function () {
        this.defaultTimeSheet = true;
        this.getStartEnd(new Date(1920, 1, 3));
    };
    MyworkComponent.prototype.getTimeSheet = function (startDate, endDate) {
        var _this = this;
        this.timeSheetService.fetchDaily('?start=' + startDate + '&end=' + endDate + '&page=' + this.currentPageIndex)
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                if (startDate === '') {
                    _this.timeSheets = _this.serviceResponse.data;
                    _this.totalRecords = _this.serviceResponse.metadata.totalRecords;
                    _this.itemPerPageIndex = _this.serviceResponse.metadata.limit;
                }
                else {
                    if (_this.defaultTimeSheet) {
                        if (!_this.serviceResponse.data.length) {
                            _this.toastMessage.error(null, 'You don\'t have default timesheet.');
                        }
                        else {
                            _this.fillTimeSheets = _this.serviceResponse.data;
                            _this.setTimesheets(_this.fillTimeSheets);
                        }
                    }
                    else {
                        _this.fillTimeSheets = _this.serviceResponse.data;
                        _this.setTimesheets(_this.fillTimeSheets);
                    }
                }
            }
            _this.defaultTimeSheet = false;
        });
    };
    MyworkComponent.prototype.onSearch = function () {
        this.currentDate = new Date(this.timeSheetSearchForm.value.timeSheetDate.year, (this.timeSheetSearchForm.value.timeSheetDate.month - 1), this.timeSheetSearchForm.value.timeSheetDate.day);
        this.getStartEnd(this.currentDate);
    };
    MyworkComponent.prototype.onSubmit = function () {
        var _this = this;
        this.timeSheetFormSubmitted = true;
        setTimeout(function () {
            if (document.getElementsByClassName('invalid-feedback-show').length > 0) {
                window.scroll(0, 0);
                return;
            }
            var timeSheetFormFormatted = [];
            _this.timeSheetForm.value.timesheets.forEach(function (x) {
                timeSheetFormFormatted.push({
                    start: _this.startDate,
                    end: _this.endDate,
                    days: x.days
                });
            });
            _this.submitTimeSheet = false;
            _this.timeSheetService.daily(timeSheetFormFormatted)
                .subscribe(function (data) {
                _this.serviceResponse = data;
                if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                    _this.toastMessage.success(null, _this.serviceResponse.statusMessage);
                    if (_this.dailyTimeSheet) {
                        _this.getTimeSheet('', '');
                    }
                }
                else {
                    _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
                }
                _this.submitTimeSheet = true;
                _this.timeSheetFormSubmitted = false;
            });
        }, 100);
    };
    MyworkComponent.prototype.getBauHours = function (bau) {
        var findElement = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].BAU.find(function (x) { return x.id.toString() === bau.toString(); });
        return findElement.value;
    };
    MyworkComponent.prototype.getBau = function (bau) {
        var findElement = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].BAU.find(function (x) { return x.id.toString() === bau.toString(); });
        return findElement.name;
    };
    MyworkComponent.prototype.pageChanged = function (pageNo) {
        this.currentPageIndex = pageNo;
        this.getTimeSheet('', '');
    };
    MyworkComponent.prototype.setTimesheets = function (timeSheetData) {
        var currentDate = this.currentDate;
        var weekday = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].WEEK_DAYS;
        var monthNames = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].MONTH_NAMES;
        var setWeek = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 1));
        var _loop_1 = function (i) {
            var day = ((currentDate.getDate() < 10) ? '0' + currentDate.getDate() : currentDate.getDate());
            var month = (currentDate.getMonth() + 1);
            var formattedDated = currentDate.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
            if (i === 0) {
                this_1.startDate = formattedDated;
            }
            if (i === 6) {
                this_1.endDate = formattedDated;
            }
            var timeSheetFilled = [];
            if (timeSheetData.length > 0) {
                if (!this_1.defaultTimeSheet) {
                    timeSheetFilled = timeSheetData.filter(function (element) {
                        return ((formattedDated + 'T00:00:00.000Z') === element.date);
                    });
                }
            }
            var dayName = (this_1.dailyTimeSheet) ? day + ' ' + monthNames[month] + ' ' +
                currentDate.getFullYear() + ' (' + weekday[currentDate.getDay()] + ')' : ' (' + weekday[currentDate.getDay()] + ')';
            if (!this_1.defaultTimeSheet && timeSheetFilled.length > 0) {
                setWeek.push(this_1.formBuilder.group({
                    id: formattedDated,
                    name: dayName,
                    bau: timeSheetFilled[0].bau,
                    ot_planned: timeSheetFilled[0].ot_planned,
                    addtion_hours_planned: (timeSheetFilled[0].addtion_hours_planned !== null) ? timeSheetFilled[0].addtion_hours_planned : '',
                    addtion_hours_desc_planned: (timeSheetFilled[0].addtion_hours_desc_planned !== null) ?
                        timeSheetFilled[0].addtion_hours_desc_planned : '',
                    ot_unplanned: timeSheetFilled[0].ot_unplanned,
                    addtion_hours_unplanned: (timeSheetFilled[0].addtion_hours_unplanned !== null) ? timeSheetFilled[0].addtion_hours_unplanned : '',
                    addtion_hours_desc_unplanned: (timeSheetFilled[0].addtion_hours_desc_unplanned !== null) ?
                        timeSheetFilled[0].addtion_hours_desc_unplanned : ''
                }));
            }
            else if (this_1.defaultTimeSheet) {
                setWeek.push(this_1.formBuilder.group({
                    id: formattedDated,
                    name: dayName,
                    bau: timeSheetData[i].bau,
                    ot_planned: timeSheetData[i].ot_planned,
                    addtion_hours_planned: (timeSheetData[i].addtion_hours_planned !== null) ? timeSheetData[i].addtion_hours_planned : '',
                    addtion_hours_desc_planned: (timeSheetData[i].addtion_hours_desc_planned !== null) ?
                        timeSheetData[i].addtion_hours_desc_planned : '',
                    ot_unplanned: timeSheetData[i].ot_unplanned,
                    addtion_hours_unplanned: (timeSheetData[i].addtion_hours_unplanned !== null) ? timeSheetData[i].addtion_hours_unplanned : '',
                    addtion_hours_desc_unplanned: (timeSheetData[i].addtion_hours_desc_unplanned !== null) ?
                        timeSheetData[i].addtion_hours_desc_unplanned : ''
                }));
            }
            else {
                setWeek.push(this_1.formBuilder.group({
                    id: formattedDated,
                    name: dayName,
                    bau: 0,
                    ot_planned: 0,
                    addtion_hours_planned: '',
                    addtion_hours_desc_planned: '',
                    ot_unplanned: 0,
                    addtion_hours_unplanned: '',
                    addtion_hours_desc_unplanned: ''
                }));
            }
            currentDate.setDate(currentDate.getDate() + 1);
            if (currentDate > new Date()) {
                return "break";
            }
        };
        var this_1 = this;
        for (var i = 0; i < 7; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        this.initForm();
        var control = this.timeSheetForm.controls.timesheets;
        var timeSheetCreate = {
            days: setWeek
        };
        control.push(this.formBuilder.group(timeSheetCreate));
        return setWeek;
    };
    MyworkComponent.prototype.getStartEnd = function (currentDate) {
        currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 1));
        for (var i = 0; i < 7; i++) {
            var day = ((currentDate.getDate() < 10) ? '0' + currentDate.getDate() : currentDate.getDate());
            var month = (currentDate.getMonth() + 1);
            var formattedDated = currentDate.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
            if (i === 0) {
                this.startDate = formattedDated;
            }
            if (i === 6) {
                this.endDate = formattedDated;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        this.getTimeSheet(this.startDate, this.endDate);
    };
    MyworkComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            this.onSubmit();
        }
    };
    MyworkComponent.prototype.getUserById = function () {
        var _this = this;
        this.userService.findById()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            _this.user = _this.serviceResponse.data;
            _this.managerName = _this.user.manager[0].name;
            _this.projectName = _this.user.project[0].name;
            _this.infraName = (_this.user.infra.length > 0) ? _this.user.infra[0].name : 'N/A';
        });
    };
    MyworkComponent.prototype.dateFormat = function (date) {
        return date.split('T')[0];
    };
    MyworkComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__["ToastMessage"] },
        { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _api_services_time_sheet_service__WEBPACK_IMPORTED_MODULE_6__["TimeSheetService"] }
    ]; };
    MyworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myworks',
            template: __webpack_require__(/*! raw-loader!./mywork.component.html */ "./node_modules/raw-loader/index.js!./src/app/mywork/mywork.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./mywork.component.scss */ "./src/app/mywork/mywork.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_4__["ToastMessage"],
            _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _api_services_time_sheet_service__WEBPACK_IMPORTED_MODULE_6__["TimeSheetService"]])
    ], MyworkComponent);
    return MyworkComponent;
}());



/***/ }),

/***/ "./src/app/mywork/mywork.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mywork/mywork.module.ts ***!
  \*****************************************/
/*! exports provided: MyworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkModule", function() { return MyworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mywork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mywork.component */ "./src/app/mywork/mywork.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _mywork_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mywork-routing.module */ "./src/app/mywork/mywork-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_time_sheet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/services/time-sheet.service */ "./src/app/api/services/time-sheet.service.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");












var MyworkModule = /** @class */ (function () {
    function MyworkModule() {
    }
    MyworkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mywork_component__WEBPACK_IMPORTED_MODULE_3__["MyworkComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _mywork_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyworkRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"]
            ],
            providers: [
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__["ToastMessage"],
                _api_services_time_sheet_service__WEBPACK_IMPORTED_MODULE_7__["TimeSheetService"],
                _api_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]
            ]
        })
    ], MyworkModule);
    return MyworkModule;
}());



/***/ })

}]);
//# sourceMappingURL=mywork-mywork-module.js.map