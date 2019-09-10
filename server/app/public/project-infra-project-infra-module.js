(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-infra-project-infra-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project-infra/project-infra.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-infra/project-infra.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Project Infra Tower'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\n    <h2><label class=\"control-label col-sm-12\">{{ formTypeShow }} </label></h2>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Project</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"project_id\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.project_id.errors }\">\n          <option *ngFor=\"let project of projects\" [value]=\"project._id\">\n            {{ project.name }}</option>\n        </select>\n        <div *ngIf=\"formSubmitted && !!f.project_id?.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.project_id?.errors.required\">\n            Project is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Infra Tower</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"infra_tower_id\" [ngClass]=\"{ 'is-invalid': formSubmitted && f.infra_tower_id.errors }\">\n          <option *ngFor=\"let infraTower of infraTowers\" [value]=\"infraTower._id\">\n            {{ infraTower.name }}</option>\n        </select>\n        <div *ngIf=\"formSubmitted && !!f.infra_tower_id?.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"!!f.infra_tower_id?.errors.required\">\n            Infra Tower is required\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Status&nbsp;&nbsp;&nbsp;<input type=\"checkbox\"\n          formControlName=\"is_active\"></label>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-6\">\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>&nbsp;&nbsp;&nbsp;<button type=\"button\"\n          (click)=\"clearForm()\" class=\"btn btn-default\">\n          Clear\n        </button>\n      </div>\n    </div>\n  </form>\n  <table id=\"timeSheet\" class=\"table table-striped table-bordered table100\">\n    <thead>\n      <tr>\n        <td colspan=\"6\">\n          <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"Enter search text\"\n                  [ngClass]=\"{ 'is-invalid': searchFormSubmitted && sf.name.errors }\" />\n                <div *ngIf=\"searchFormSubmitted && !!sf.name?.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"!!sf.name?.errors.required\">\n                    Search text is required\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <button type=\"submit\" class=\"btn btn-primary\">Search</button>&nbsp;&nbsp;&nbsp;<button type=\"button\"\n                  class=\"btn btn-default\" (click)=\"clearSearch()\">\n                  Clear Search Results\n                </button>\n              </div>\n            </div>\n          </form>\n        </td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th>Project</th>\n        <th>Infra Tower</th>\n        <th>Status</th>\n        <th>Action</th>\n      </tr>\n      <tr *ngFor=\"\n              let projectInfraTower of projectInfraTowers\n                  | paginate\n                      : {\n                            id: 'paginationControlsId',\n                            itemsPerPage: itemPerPageIndex,\n                            currentPage: currentPageIndex,\n                            totalItems: totalRecords\n                        }\n          \">\n\n        <td>{{ projectInfraTower.project[0].name }}</td>\n        <td>{{ projectInfraTower.infra_tower[0].name }}</td>\n        <td>{{ projectInfraTower.is_active == true ? 'Active' : 'Inactive' }}</td>\n        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"update(projectInfraTower)\">Update</button></td>\n      </tr>\n      <tr *ngIf=\"!projectInfraTowers.length\">\n        <td colspan=\"6\">\n          No Records found.\n        </td>\n      </tr>\n    </tbody>\n    <tfoot *ngIf=\"projectInfraTowers.length\">\n      <tr>\n        <td colspan=\"6\">\n          <pagination-controls id=\"paginationControlsId\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\"\n            screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\">\n          </pagination-controls>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/api/services/project-infra-tower.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/api/services/project-infra-tower.service.ts ***!
  \*************************************************************/
/*! exports provided: ProjectInfraTowerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfraTowerService", function() { return ProjectInfraTowerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/app-const */ "./src/app/utils/app-const.ts");




var ProjectInfraTowerService = /** @class */ (function () {
    function ProjectInfraTowerService(apiService) {
        this.apiService = apiService;
    }
    ProjectInfraTowerService.prototype.create = function (createForm) {
        var create = _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.PROJECT_INFRA_TOWER;
        return this.apiService.httpPost(create, createForm.value);
    };
    ProjectInfraTowerService.prototype.update = function (updateForm) {
        var update = _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.PROJECT_INFRA_TOWER;
        return this.apiService.httpPut(update, updateForm.value);
    };
    ProjectInfraTowerService.prototype.findAll = function (params) {
        var findAll = (params !== null) ? _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.PROJECT_INFRA_TOWER +
            '?' + params : _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.PROJECT_INFRA_TOWER;
        return this.apiService.httpGet(findAll);
    };
    ProjectInfraTowerService.prototype.findList = function () {
        var findList = _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.PROJECT_INFRA_TOWER_LIST;
        return this.apiService.httpGet(findList);
    };
    ProjectInfraTowerService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    ProjectInfraTowerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProjectInfraTowerService);
    return ProjectInfraTowerService;
}());



/***/ }),

/***/ "./src/app/project-infra/project-infra-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/project-infra/project-infra-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProjectInfraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfraRoutingModule", function() { return ProjectInfraRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_infra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-infra.component */ "./src/app/project-infra/project-infra.component.ts");




var routes = [
    {
        path: '', component: _project_infra_component__WEBPACK_IMPORTED_MODULE_3__["ProjectInfraComponent"]
    }
];
var ProjectInfraRoutingModule = /** @class */ (function () {
    function ProjectInfraRoutingModule() {
    }
    ProjectInfraRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectInfraRoutingModule);
    return ProjectInfraRoutingModule;
}());



/***/ }),

/***/ "./src/app/project-infra/project-infra.component.scss":
/*!************************************************************!*\
  !*** ./src/app/project-infra/project-infra.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtaW5mcmEvcHJvamVjdC1pbmZyYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/project-infra/project-infra.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/project-infra/project-infra.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectInfraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfraComponent", function() { return ProjectInfraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");
/* harmony import */ var _api_services_project_infra_tower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/services/project-infra-tower.service */ "./src/app/api/services/project-infra-tower.service.ts");
/* harmony import */ var _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/infra-tower.service */ "./src/app/api/services/infra-tower.service.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");









var ProjectInfraComponent = /** @class */ (function () {
    function ProjectInfraComponent(formBuilder, projectService, infraTowerService, projectInfraTowerService, toastMessage) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.infraTowerService = infraTowerService;
        this.projectInfraTowerService = projectInfraTowerService;
        this.toastMessage = toastMessage;
        this.projects = [];
        this.infraTowers = [];
        this.projectInfraTowers = [];
        this.currentPageIndex = 1;
        this.totalRecords = 0;
        this.formTypeShow = 'Add';
    }
    ProjectInfraComponent.prototype.ngOnInit = function () {
        this.createFormInit();
        this.searchFormInit();
        this.getProjects();
        this.getInfraTowers();
        this.getProjectInfraTowers('page=' + this.currentPageIndex);
    };
    ProjectInfraComponent.prototype.createFormInit = function () {
        this.createForm = this.formBuilder.group({
            id: [''],
            project_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            infra_tower_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            is_active: [true]
        });
    };
    ProjectInfraComponent.prototype.searchFormInit = function () {
        this.searchForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(ProjectInfraComponent.prototype, "f", {
        get: function () {
            return this.createForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectInfraComponent.prototype.formType = function () {
        return (this.createForm.value.id === '') ? 'Add' : 'Update';
    };
    Object.defineProperty(ProjectInfraComponent.prototype, "sf", {
        get: function () {
            return this.searchForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProjectInfraComponent.prototype.getProjectInfraTowers = function (params) {
        var _this = this;
        this.projectInfraTowerService.findAll(params)
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_7__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.projectInfraTowers = _this.serviceResponse.data;
                _this.totalRecords = _this.serviceResponse.metadata.totalRecords;
                _this.itemPerPageIndex = _this.serviceResponse.metadata.limit;
            }
            else {
                _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
            }
        });
    };
    ProjectInfraComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.findList()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_7__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.projects = _this.serviceResponse.data;
                if (_this.projects.length) {
                    _this.createForm.controls['project_id'].setValue(_this.projects[0]._id);
                }
            }
        });
    };
    ProjectInfraComponent.prototype.getInfraTowers = function () {
        var _this = this;
        this.infraTowerService.findList(null)
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_7__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.infraTowers = _this.serviceResponse.data;
                if (_this.projects.length) {
                    _this.createForm.controls['infra_tower_id'].setValue(_this.infraTowers[0]._id);
                }
            }
        });
    };
    ProjectInfraComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formSubmitted = true;
        if (this.createForm.invalid) {
            return;
        }
        if (this.createForm.value.id !== '') {
            this.projectInfraTowerService.update(this.createForm)
                .subscribe(function (data) {
                _this.responseSuccessHandler(data);
            });
        }
        else {
            this.projectInfraTowerService.create(this.createForm)
                .subscribe(function (data) {
                _this.responseSuccessHandler(data);
            });
        }
    };
    ProjectInfraComponent.prototype.responseSuccessHandler = function (data) {
        this.serviceResponse = data;
        if (this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_7__["AppConst"].SERVICE_STATUS.SUCCESS) {
            this.formSubmitted = false;
            this.createForm.controls['id'].setValue('');
            this.createForm.controls['project_id'].setValue(((this.projects) ? this.projects[0]._id : ''));
            this.createForm.controls['infra_tower_id'].setValue(((this.infraTowers) ? this.infraTowers[0]._id : ''));
            this.createForm.controls['is_active'].setValue(true);
            this.getProjectInfraTowers('page=' + this.currentPageIndex);
            this.toastMessage.success(null, this.serviceResponse.statusMessage);
        }
        else {
            var errorMessage = (this.serviceResponse.errors) ? this.serviceResponse.errors.statusMessage : this.serviceResponse.statusMessage;
            this.toastMessage.error(null, errorMessage);
        }
    };
    ProjectInfraComponent.prototype.update = function (projectInfraTower) {
        this.createForm.controls['id'].setValue(projectInfraTower._id);
        this.createForm.controls['project_id'].setValue(projectInfraTower.project_id);
        this.createForm.controls['infra_tower_id'].setValue(projectInfraTower.infra_tower_id);
        this.createForm.controls['is_active'].setValue(projectInfraTower.is_active);
        this.formTypeShow = this.formType();
        window.scroll(0, 0);
    };
    ProjectInfraComponent.prototype.pageChanged = function (pageNo) {
        this.currentPageIndex = pageNo;
        this.getProjectInfraTowers(this.getSearchedData());
    };
    ProjectInfraComponent.prototype.getSearchedData = function () {
        var name = (this.searchForm.value.name !== '') ? (this.querParams(this.searchForm.value) + '&') : '';
        return name + 'page=' + this.currentPageIndex;
    };
    ProjectInfraComponent.prototype.querParams = function (object) {
        return Object.entries(object).map(function (_a) {
            var key = _a[0], val = _a[1];
            return key + "=" + val;
        }).join('&');
    };
    ProjectInfraComponent.prototype.clearForm = function () {
        this.formSubmitted = false;
        this.createFormInit();
        this.formTypeShow = this.formType();
    };
    ProjectInfraComponent.prototype.clearSearch = function () {
        this.searchFormSubmitted = false;
        this.searchFormInit();
        this.currentPageIndex = 1;
        this.getProjectInfraTowers('page=' + this.currentPageIndex);
    };
    ProjectInfraComponent.prototype.onSearch = function () {
        this.searchFormSubmitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        this.getProjectInfraTowers(this.getSearchedData());
    };
    ProjectInfraComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _api_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
        { type: _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_6__["InfraTowerService"] },
        { type: _api_services_project_infra_tower_service__WEBPACK_IMPORTED_MODULE_5__["ProjectInfraTowerService"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__["ToastMessage"] }
    ]; };
    ProjectInfraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-infra',
            template: __webpack_require__(/*! raw-loader!./project-infra.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-infra/project-infra.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./project-infra.component.scss */ "./src/app/project-infra/project-infra.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _api_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_6__["InfraTowerService"],
            _api_services_project_infra_tower_service__WEBPACK_IMPORTED_MODULE_5__["ProjectInfraTowerService"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__["ToastMessage"]])
    ], ProjectInfraComponent);
    return ProjectInfraComponent;
}());



/***/ }),

/***/ "./src/app/project-infra/project-infra.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/project-infra/project-infra.module.ts ***!
  \*******************************************************/
/*! exports provided: ProjectInfraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectInfraModule", function() { return ProjectInfraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");
/* harmony import */ var _api_services_project_infra_tower_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/services/project-infra-tower.service */ "./src/app/api/services/project-infra-tower.service.ts");
/* harmony import */ var _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/infra-tower.service */ "./src/app/api/services/infra-tower.service.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _project_infra_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project-infra-routing.module */ "./src/app/project-infra/project-infra-routing.module.ts");
/* harmony import */ var _project_infra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-infra.component */ "./src/app/project-infra/project-infra.component.ts");












var ProjectInfraModule = /** @class */ (function () {
    function ProjectInfraModule() {
    }
    ProjectInfraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_project_infra_component__WEBPACK_IMPORTED_MODULE_11__["ProjectInfraComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _project_infra_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectInfraRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ],
            providers: [
                _api_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
                _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_6__["InfraTowerService"],
                _api_services_project_infra_tower_service__WEBPACK_IMPORTED_MODULE_5__["ProjectInfraTowerService"],
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_7__["ToastMessage"]
            ]
        })
    ], ProjectInfraModule);
    return ProjectInfraModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-infra-project-infra-module.js.map