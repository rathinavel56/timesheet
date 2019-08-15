import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { RoleService } from '../api/services/role.service';
import { UserService } from '../api/services/user.service';
import { AppConst } from '../utils/app-const';
import { ToastMessage } from '../utils/toast-message';
import { Role } from '../api/models/role';
import { User } from '../api/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../api/services/project.service';
import { InfraTowerService } from '../api/services/infra-tower.service';
import { Project } from '../api/models/project';
import { InfraTower } from '../api/models/infra-tower';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-role',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent extends AppComponent implements OnInit {

  public roles: Role[] = [];
  public users: User[] = [];
  public user: User;
  public managers: User[] = [];
  public serviceResponse: any;
  public itemPerPageIndex: Number;
  public currentPageIndex: Number = 1;
  public totalRecords: Number = 0;
  public updateForm: FormGroup;
  public searchForm: FormGroup;
  public isAdmin: Boolean = false;
  public submitted: Boolean = false;
  public searchFormSubmitted: Boolean;
  public projects: Project[] = [];
  public infraTowers: InfraTower[] = [];

  constructor(private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private infraTowerService: InfraTowerService,
    private roleService: RoleService,
    private userService: UserService,
    private toastMessage: ToastMessage) {
      super(null);
      this.isAdmin = this.isAdminValidate();
  }

  ngOnInit() {
    if (this.isAdmin) {
      this.getRoles();
      this.getUserRoles('page=' + this.currentPageIndex);
      this.searchFormInit();
    } else {
      this.getUserById();
    }
    this.findAllManagers();
    this.getProjects();
    this.updateFormInit();
  }

  updateFormInit() {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      manager_id: ['', Validators.required],
      project_id: ['', Validators.required],
      infra_tower_id: [''],
      role_id: [''],
      is_active: ['']
    });
  }

  searchFormInit() {
    this.searchForm = this.formBuilder.group({
      employee_id: ['', Validators.required]
    });
  }

  get f() {
    return this.updateForm.controls;
  }

  get sf() {
    return this.searchForm.controls;
  }

  getRoles() {
    this.roleService.findAll()
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.roles = this.serviceResponse.data;
          this.updateForm.controls['role_id'].setValue(this.roles[0]._id);
        }
      });
  }

  getUserRoles(params: String) {
    this.roleService.findAllByUser(params)
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.users = this.serviceResponse.data;
          this.totalRecords = this.serviceResponse.metadata.totalRecords;
          this.itemPerPageIndex = this.serviceResponse.metadata.limit;
        }
      });
  }

  findAllManagers() {
    this.userService.findAllManagers()
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.managers = this.serviceResponse.data;
          if (!this.isAdmin) {
            this.updateForm.controls['manager_id'].setValue(this.user.manager_id);
          } else {  
            this.updateForm.controls['manager_id'].setValue(this.managers[0].id);
          }
        }
      });
  }

  getProjects() {
    this.projectService.findList()
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.projects = this.serviceResponse.data;
          if (this.projects.length) {
            if (!this.isAdmin) {
              this.updateForm.controls['project_id'].setValue(this.user.project_id);
            } else {
              this.updateForm.controls['project_id'].setValue(this.projects[0]._id);
            }
            this.getInfraTowers();
          }
        }
      });
  }

  getInfraTowers() {
    this.infraTowerService.findList(this.querParams({ project_id: this.updateForm.value.project_id }))
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.infraTowers = this.serviceResponse.data;
          if (this.infraTowers.length) {
            if (!this.isAdmin) {
              this.updateForm.controls['infra_tower_id'].setValue(this.user.infra_tower_id);
            } else {
              this.updateForm.controls['infra_tower_id'].setValue(this.infraTowers[0]._id);
            }
          } else {
            this.updateForm.controls['infra_tower_id'].setValue('');
          }
        }
      });
  }

  getUserById() {
    this.userService.findById()
      .subscribe(data => {
        this.serviceResponse = data;
        this.user = this.serviceResponse.data;
        this.updateForm.controls['name'].setValue(this.user.name);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateForm.invalid) {
      return;
    }
    this.userService.update(this.updateForm)
      .subscribe(data => {
        this.submitted = false;
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.toastMessage.success(null, this.serviceResponse.statusMessage);
          if (this.isAdmin) {
            this.ngOnInit();
          }
        } else {
          this.toastMessage.error(null, this.serviceResponse.statusMessage);
        }
      });
  }

  onSearch() {
    this.searchFormSubmitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.currentPageIndex = 1;
    this.getUserRoles(this.getSearchedData());
  }

  pageChanged(pageNo: any) {
    this.currentPageIndex = pageNo;
    this.getUserRoles(this.getSearchedData());
  }

  getSearchedData() {
    const employee_id = (this.searchForm.value.employee_id !== '') ? (this.querParams(this.searchForm.value) + '&') : '';
    return employee_id + 'page=' + this.currentPageIndex;
  }

  querParams(object: Object): String {
    return Object.entries(object).map(([key, val]) => `${key}=${val}`).join('&');
  }

  clearSearch() {
    this.searchFormSubmitted = false;
    this.getUserRoles(null);
    this.searchFormInit();
  }

  updateUser(user: User) {
    this.updateForm.controls['name'].setValue(user.name);
    this.updateForm.controls['employee_id'].setValue(user.employee_id);
    this.updateForm.controls['role_id'].setValue(user.role_id);
    this.updateForm.controls['manager_id'].setValue(user.manager_id);
    this.updateForm.controls['is_active'].setValue(user.is_active);
    window.scroll(0, 0);
  }
}
