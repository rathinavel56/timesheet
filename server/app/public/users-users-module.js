(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n  <app-page-header [heading]=\"'Users'\" [icon]=\"'fa-edit'\"></app-page-header>\n  <form [formGroup]=\"updateForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Employee Name</label>\n      <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control input-underline input-lg\" formControlName=\"name\"\n          placeholder=\"Enter Your Emp name\" [ngClass]=\"{ 'is-invalid': submitted && (updateForm.get('name').value.length === 0) }\">\n        <div *ngIf=\"submitted && (updateForm.get('name').value.length === 0)\"\n                            class=\"invalid-feedback-show\">\n            Emp name is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\">Shore Type</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"shore_type\">\n          <option *ngFor=\"let shoreType of shoreTypes\"\n                                [value]=\"shoreType.id\">{{shoreType.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"isAdmin\">\n      <label class=\"control-label col-sm-2\">Role</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"role_id\">\n          <option *ngFor=\"let role of roles\" [value]=\"role._id\">{{ role.name }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" >Manager</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"manager_id\">\n          <option *ngFor=\"let manager of managers\" [value]=\"manager.id\">{{ manager.name }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" >Project</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"project_id\" (change)=\"getInfraTowers()\">\n          <option *ngFor=\"let project of projects\" [value]=\"project._id\">{{project.name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"infraTowers.length > 0\">\n      <label class=\"control-label col-sm-2\" >Infra Tower</label>\n      <div class=\"col-sm-6\">\n        <select class=\"form-control\" formControlName=\"infra_tower_id\">\n          <option *ngFor=\"let infraTower of infraTowers\" [value]=\"infraTower._id\">{{infraTower.name}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"isAdmin\">\n      <label class=\"control-label col-sm-2\">Status&nbsp;&nbsp;&nbsp;<input type=\"checkbox\" formControlName=\"is_active\"></label>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </div>\n  </form>\n  <table id=\"timeSheet\" class=\"table table-striped table-bordered table100\" *ngIf=\"isAdmin\">\n    <thead>\n      <tr>\n        <td colspan=\"9\">\n          <form [formGroup]=\"searchForm\" (ngSubmit)=\"onSearch()\">\n            <div class=\"row\">\n              <div class=\"col-sm-2\">\n                <input type=\"number\" class=\"form-control\" formControlName=\"employee_id\"\n                  placeholder=\"Enter Emp Id to search\"\n                  [ngClass]=\"{ 'is-invalid': searchFormSubmitted && sf.employee_id.errors }\">\n                <div *ngIf=\"searchFormSubmitted && !!sf.employee_id?.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"!!sf.employee_id?.errors.required\">Emp Id is required</div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <button type=\"submit\" class=\"btn btn-primary\">Search</button>&nbsp;&nbsp;&nbsp;<button type=\"button\"\n                  class=\"btn btn-default\" (click)=\"clearSearch()\">Clear Search Results</button>\n              </div>\n            </div>\n          </form>\n        </td>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <th>Employee ID</th>\n        <th>Name</th>\n        <th>Shore Type</th>\n        <th>Role</th>\n        <th>Manager</th>\n        <th>Project</th>\n        <th>Infra Tower</th>\n        <th>Status</th>\n        <th>Action</th>\n      </tr>\n      <tr *ngFor=\"let user of users  | paginate: { id: 'paginationControlsId',\n      itemsPerPage: itemPerPageIndex,\n      currentPage: currentPageIndex,\n      totalItems: totalRecords }\">\n        <td>{{user.employee_id}}</td>\n        <td>{{user.name}}</td>\n        <th>{{(user.shore_type === 0) ? 'Offshore': 'Onshore'}}</th>\n        <td>{{user.role[0].name}}</td>\n        <td>{{user.manager[0].name}}</td>\n        <td>{{user.project[0].name}}</td>\n        <td>{{(user.infra.length > 0) ? user.infra[0].name: 'N/A'}}</td>\n        <td>{{ user.is_active == true ? 'Active' : 'Inactive' }}</td>\n        <td><button type=\"button\" class=\"btn btn-primary\" (click)='updateUser(user)'>Update</button></td>\n      </tr>\n      <tr *ngIf=\"!users.length\">\n        <td colspan=\"9\">\n          No Records found.\n        </td>\n      </tr>\n    </tbody>\n    <tfoot *ngIf=\"users.length\">\n      <tr>\n        <td colspan=\"9\">\n          <pagination-controls id=\"paginationControlsId\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\"\n            directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\" nextLabel=\"Next\"\n            screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\">\n          </pagination-controls>\n        </td>\n      </tr>\n    </tfoot>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/api/services/role.service.ts":
/*!**********************************************!*\
  !*** ./src/app/api/services/role.service.ts ***!
  \**********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api/services/api.service.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/app-const */ "./src/app/utils/app-const.ts");




var RoleService = /** @class */ (function () {
    function RoleService(apiService) {
        this.apiService = apiService;
    }
    RoleService.prototype.findAll = function () {
        var findAll = _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.ROLE;
        return this.apiService.httpGet(findAll);
    };
    RoleService.prototype.findAllByUser = function (params) {
        var findAllByUser = (params !== null) ? _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.USER + '?' + params : _utils_app_const__WEBPACK_IMPORTED_MODULE_3__["AppConst"].STORE_API_PATHS.USER;
        return this.apiService.httpGet(findAllByUser);
    };
    RoleService.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");




var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _api_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/services/role.service */ "./src/app/api/services/role.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _utils_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/app-const */ "./src/app/utils/app-const.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");
/* harmony import */ var _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/services/infra-tower.service */ "./src/app/api/services/infra-tower.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");











var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(formBuilder, projectService, infraTowerService, roleService, userService, toastMessage) {
        var _this = _super.call(this, null) || this;
        _this.formBuilder = formBuilder;
        _this.projectService = projectService;
        _this.infraTowerService = infraTowerService;
        _this.roleService = roleService;
        _this.userService = userService;
        _this.toastMessage = toastMessage;
        _this.roles = [];
        _this.users = [];
        _this.managers = [];
        _this.currentPageIndex = 1;
        _this.totalRecords = 0;
        _this.isAdmin = false;
        _this.submitted = false;
        _this.projects = [];
        _this.infraTowers = [];
        _this.isAdmin = _this.isAdminValidate();
        return _this;
    }
    UserComponent.prototype.ngOnInit = function () {
        if (this.isAdmin) {
            this.getRoles();
            this.getUserRoles('page=' + this.currentPageIndex);
            this.searchFormInit();
            this.getProjects();
            this.findAllManagers();
        }
        else {
            this.getUserById();
        }
        this.updateFormInit();
        this.shoreTypes = _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SHORE_TYPE;
    };
    UserComponent.prototype.updateFormInit = function () {
        this.updateForm = this.formBuilder.group({
            employee_id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            shore_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            manager_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            project_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            infra_tower_id: [''],
            role_id: [''],
            is_active: ['']
        });
    };
    UserComponent.prototype.searchFormInit = function () {
        this.searchForm = this.formBuilder.group({
            employee_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
    };
    Object.defineProperty(UserComponent.prototype, "f", {
        get: function () {
            return this.updateForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "sf", {
        get: function () {
            return this.searchForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.getRoles = function () {
        var _this = this;
        this.roleService.findAll()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.roles = _this.serviceResponse.data;
                _this.updateForm.controls['role_id'].setValue(_this.roles[0]._id);
            }
        });
    };
    UserComponent.prototype.getUserRoles = function (params) {
        var _this = this;
        this.roleService.findAllByUser(params)
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.users = _this.serviceResponse.data;
                _this.totalRecords = _this.serviceResponse.metadata.totalRecords;
                _this.itemPerPageIndex = _this.serviceResponse.metadata.limit;
            }
        });
    };
    UserComponent.prototype.findAllManagers = function () {
        var _this = this;
        this.userService.findAllManagers()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.managers = _this.serviceResponse.data;
                if (!_this.isAdmin) {
                    _this.updateForm.controls['manager_id'].setValue(_this.user.manager_id);
                }
                else {
                    _this.updateForm.controls['manager_id'].setValue(_this.managers[0].id);
                }
            }
        });
    };
    UserComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.findList()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.projects = _this.serviceResponse.data;
                if (_this.projects.length) {
                    if (!_this.isAdmin) {
                        _this.updateForm.controls['project_id'].setValue(_this.user.project_id);
                    }
                    else {
                        _this.updateForm.controls['project_id'].setValue(_this.projects[0]._id);
                        _this.updateForm.controls['shore_type'].setValue(0);
                    }
                    _this.getInfraTowers();
                }
            }
        });
    };
    UserComponent.prototype.getInfraTowers = function () {
        var _this = this;
        this.infraTowerService.findList(this.querParams({ project_id: this.updateForm.value.project_id }))
            .subscribe(function (data) {
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.infraTowers = _this.serviceResponse.data;
                if (_this.infraTowers.length) {
                    if (!_this.isAdmin) {
                        _this.updateForm.controls['infra_tower_id'].setValue(_this.user.infra_tower_id);
                    }
                    else {
                        _this.updateForm.controls['infra_tower_id'].setValue(_this.infraTowers[0]._id);
                    }
                }
                else {
                    _this.updateForm.controls['infra_tower_id'].setValue('');
                }
            }
        });
    };
    UserComponent.prototype.getUserById = function () {
        var _this = this;
        this.userService.findById()
            .subscribe(function (data) {
            _this.serviceResponse = data;
            _this.user = _this.serviceResponse.data;
            _this.updateForm.controls['name'].setValue(_this.user.name);
            _this.updateForm.controls['shore_type'].setValue(_this.user.shore_type);
            _this.getProjects();
            _this.findAllManagers();
        });
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.updateForm.invalid) {
            return;
        }
        this.userService.update(this.updateForm)
            .subscribe(function (data) {
            _this.submitted = false;
            _this.serviceResponse = data;
            if (_this.serviceResponse.status === _utils_app_const__WEBPACK_IMPORTED_MODULE_5__["AppConst"].SERVICE_STATUS.SUCCESS) {
                _this.toastMessage.success(null, _this.serviceResponse.statusMessage);
                if (_this.isAdmin) {
                    _this.ngOnInit();
                }
            }
            else {
                _this.toastMessage.error(null, _this.serviceResponse.statusMessage);
            }
        });
    };
    UserComponent.prototype.onSearch = function () {
        this.searchFormSubmitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        this.currentPageIndex = 1;
        this.getUserRoles(this.getSearchedData());
    };
    UserComponent.prototype.pageChanged = function (pageNo) {
        this.currentPageIndex = pageNo;
        this.getUserRoles(this.getSearchedData());
    };
    UserComponent.prototype.getSearchedData = function () {
        var employee_id = (this.searchForm.value.employee_id !== '') ? (this.querParams(this.searchForm.value) + '&') : '';
        return employee_id + 'page=' + this.currentPageIndex;
    };
    UserComponent.prototype.querParams = function (object) {
        return Object.entries(object).map(function (_a) {
            var key = _a[0], val = _a[1];
            return key + "=" + val;
        }).join('&');
    };
    UserComponent.prototype.clearSearch = function () {
        this.searchFormSubmitted = false;
        this.getUserRoles(null);
        this.searchFormInit();
    };
    UserComponent.prototype.updateUser = function (user) {
        this.updateForm.controls['employee_id'].setValue(user.employee_id);
        this.updateForm.controls['name'].setValue(user.name);
        this.updateForm.controls['shore_type'].setValue(user.shore_type);
        this.updateForm.controls['role_id'].setValue(user.role_id);
        this.updateForm.controls['manager_id'].setValue(user.manager_id);
        this.updateForm.controls['is_active'].setValue(user.is_active);
        window.scroll(0, 0);
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _api_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_9__["InfraTowerService"] },
        { type: _api_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__["ToastMessage"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _api_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_9__["InfraTowerService"],
            _api_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _utils_toast_message__WEBPACK_IMPORTED_MODULE_6__["ToastMessage"]])
    ], UserComponent);
    return UserComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]));



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _api_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/services/role.service */ "./src/app/api/services/role.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/toast-message */ "./src/app/utils/toast-message.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes_boolean_transform_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/pipes/boolean-transform.module */ "./src/app/shared/pipes/boolean-transform.module.ts");
/* harmony import */ var _api_services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/services/project.service */ "./src/app/api/services/project.service.ts");
/* harmony import */ var _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../api/services/infra-tower.service */ "./src/app/api/services/infra-tower.service.ts");














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _shared_pipes_boolean_transform_module__WEBPACK_IMPORTED_MODULE_11__["BooleanTransformModule"]
            ],
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]
            ],
            providers: [
                _api_services_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"],
                _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
                _utils_toast_message__WEBPACK_IMPORTED_MODULE_8__["ToastMessage"],
                _api_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
                _api_services_infra_tower_service__WEBPACK_IMPORTED_MODULE_13__["InfraTowerService"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map