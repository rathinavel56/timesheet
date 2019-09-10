(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Projects'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" >Project {{ formTypeShow }} </label>\n                  <div class=\"col-sm-6\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"name\"\n                                  placeholder=\"Enter the text\"\n                                  [ngClass]=\"{ 'is-invalid': formSubmitted && f.name.errors }\" />\n                          <div *ngIf=\"formSubmitted && !!f.name?.errors\" class=\"invalid-feedback\">\n                                  <div *ngIf=\"!!f.name?.errors.required\">\n                                          Name is required\n                                  </div>\n                          </div>\n                  </div>\n          </div>\n          <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\">Status&nbsp;&nbsp;&nbsp;<input type=\"checkbox\"\n                                  formControlName=\"is_active\"></label>\n          </div>\n          <div class=\"form-group\">\n                  <div class=\"col-sm-offset-2 col-sm-6\">\n                          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>&nbsp;&nbsp;&nbsp;<button\n                                  type=\"button\" (click)=\"clearForm()\" class=\"btn btn-default\">\n                                  Clear\n                          </button>\n                  </div>\n          </div>\n  </form>\n  <table id=\"timeSheet\" class=\"table table-striped table-bordered table100\">\n          <thead>\n                  <tr>\n                          <td colspan=\"6\">\n                                  <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n                                          <div class=\"row\">\n                                                  <div class=\"col-sm-2\">\n                                                          <input type=\"text\" class=\"form-control\"\n                                                                  formControlName=\"name\"\n                                                                  placeholder=\"Enter search text\"\n                                                                  [ngClass]=\"{ 'is-invalid': searchFormSubmitted && sf.name.errors }\" />\n                                                          <div *ngIf=\"searchFormSubmitted && !!sf.name?.errors\"\n                                                                  class=\"invalid-feedback\">\n                                                                  <div *ngIf=\"!!sf.name?.errors.required\">\n                                                                          Search text is required\n                                                                  </div>\n                                                          </div>\n                                                  </div>\n                                                  <div class=\"col-sm-4\">\n                                                          <button type=\"submit\"\n                                                                  class=\"btn btn-primary\">Search</button>&nbsp;&nbsp;&nbsp;<button\n                                                                  type=\"button\" class=\"btn btn-default\"\n                                                                  (click)=\"clearSearch()\">\n                                                                  Clear Search Results\n                                                          </button>\n                                                  </div>\n                                          </div>\n                                  </form>\n                          </td>\n                  </tr>\n          </thead>\n          <tbody>\n                  <tr>\n                          <th>Infra Tower</th>\n                          <th>Status</th>\n                          <th>Action</th>\n                  </tr>\n                  <tr *ngFor=\"\n              let project of projects\n                  | paginate\n                      : {\n                            id: 'paginationControlsId',\n                            itemsPerPage: itemPerPageIndex,\n                            currentPage: currentPageIndex,\n                            totalItems: totalRecords\n                        }\n          \">\n\n                          <td>{{ project.name }}</td>\n                          <td>{{ project.is_active == true ? 'Active' : 'Inactive' }}</td>\n                          <td><button type=\"button\" class=\"btn btn-primary\"\n                                          (click)=\"update(project)\">Update</button></td>\n                  </tr>\n                  <tr *ngIf=\"!projects.length\">\n                          <td colspan=\"6\">\n                                  No Records found.\n                          </td>\n                  </tr>\n          </tbody>\n          <tfoot *ngIf=\"projects.length\">\n                  <tr>\n                          <td colspan=\"6\">\n                                  <pagination-controls id=\"paginationControlsId\"\n                                          (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n                                          autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\"\n                                          nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\"\n                                          screenReaderPageLabel=\"page\">\n                                  </pagination-controls>\n                          </td>\n                  </tr>\n          </tfoot>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");




var routes = [
    {
        path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");







var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(formBuilder, projectService, toastMessage) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.toastMessage = toastMessage;
        this.projects = [];
        this.currentPageIndex = 1;
        this.totalRecords = 0;
        this.formTypeShow = 'Add';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.createFormInit();
        this.searchFormInit();
        this.getProjects('page=' + this.currentPageIndex);
    };
    ProjectsComponent.prototype.createFormInit = function () {
        this.createForm = this.formBuilder.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            is_active: [true]
        });
    };
    ProjectsComponent.prototype.searchFormInit = function () {
        this.searchForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(ProjectsComponent.prototype, "f", {
        get: function () {
            return this.createForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectsComponent.prototype.formType = function () {
        return (this.createForm.value.id === '') ? 'Add' : 'Update';
    };
    Object.defineProperty(ProjectsComponent.prototype, "sf", {
        get: function () {
            return this.searchForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectsComponent.prototype.getProjects = function (params) {
        var _this = this;
        this.projectService.findAll(params)
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_4__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.projects = _this.serviceResponse.data;
                _this.totalRecords = _this.serviceResponse.metadata.totalRecords;
                _this.itemPerPageIndex = _this.serviceResponse.metadata.limit;
            }
            else {
                _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
            }
        });
    };
    ProjectsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.createForm.invalid) {
            return;
        }
        if (this.createForm.value.id !== '') {
            this.projectService.update(this.createForm)
                .subscribe(function (data) {
                _this.formHandler(data);
            });
        }
        else {
            this.projectService.create(this.createForm)
                .subscribe(function (data) {
                _this.formHandler(data);
            });
        }
    };
    ProjectsComponent.prototype.formHandler = function (data) {
        this.serviceResponse = data;
        if (this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_4__["AppConst"].SERVICE_STATUS.SUCCESS) {
            this.projects = this.serviceResponse.data;
            this.createForm.controls['id'].setValue('');
            this.createForm.controls['name'].setValue('');
            this.createForm.controls['is_active'].setValue(true);
            this.getProjects('page=' + this.currentPageIndex);
            this.toastMessage.success(null, this.serviceResponse.statusMessage);
        }
        else {
            this.toastMessage.error(null, this.serviceResponse.statusMessage);
        }
        this.formSubmitted = false;
    };
    ProjectsComponent.prototype.update = function (project) {
        this.createForm.controls['id'].setValue(project._id);
        this.createForm.controls['name'].setValue(project.name);
        this.createForm.controls['is_active'].setValue(project.is_active);
        this.formTypeShow = this.formType();
        window.scroll(0, 0);
    };
    ProjectsComponent.prototype.pageChanged = function (pageNo) {
        this.currentPageIndex = pageNo;
        this.getProjects(this.getSearchedData());
    };
    ProjectsComponent.prototype.getSearchedData = function () {
        var name = (this.searchForm.value.name !== '') ? (this.querParams(this.searchForm.value) + '&') : '';
        return name + 'page=' + this.currentPageIndex;
    };
    ProjectsComponent.prototype.querParams = function (object) {
        return Object.entries(object).map(function (_a) {
            var key = _a[0], val = _a[1];
            return key + "=" + val;
        }).join('&');
    };
    ProjectsComponent.prototype.clearForm = function () {
        this.formSubmitted = false;
        this.createFormInit();
        this.formTypeShow = this.formType();
    };
    ProjectsComponent.prototype.clearSearch = function () {
        this.searchFormSubmitted = false;
        this.searchFormInit();
        this.currentPageIndex = 1;
        this.getProjects('page=' + this.currentPageIndex);
    };
    ProjectsComponent.prototype.onSearch = function () {
        this.searchFormSubmitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        this.getProjects(this.getSearchedData());
    };
    ProjectsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _api_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_5__["ToastMessage"] }
    ]; };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_5__["ToastMessage"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");










var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
            ],
            providers: [
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__["ToastMessage"],
                _api_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map