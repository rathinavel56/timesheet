import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../api/services/project.service';
import { ProjectInfraTowerService } from '../api/services/project-infra-tower.service';
import { InfraTowerService } from '../api/services/infra-tower.service';
import { AppConst } from '../utils/app-const';
import { Project } from '../api/models/project';
import { InfraTower } from '../api/models/infra-tower';
import { ProjectInfraTower } from '../api/models/project-infra-tower';
import { ToastMessage } from '../utils/toast-message';


@Component({
  selector: 'app-project-infra',
  templateUrl: './project-infra.component.html',
  styleUrls: ['./project-infra.component.scss'],
  animations: [routerTransition()]
})
export class ProjectInfraComponent implements OnInit {

  public serviceResponse: any;
  public projects: Project[] = [];
  public infraTowers: InfraTower[] = [];
  public projectInfraTowers: ProjectInfraTower[] = [];
  public itemPerPageIndex: Number;
  public currentPageIndex: Number = 1;
  public totalRecords: Number = 0;
  public createForm: FormGroup;
  public searchForm: FormGroup;
  public formSubmitted: Boolean;
  public searchFormSubmitted: Boolean;
  public formTypeShow: any = 'Add';

  constructor(private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private infraTowerService: InfraTowerService,
    private projectInfraTowerService: ProjectInfraTowerService,
    private toastMessage: ToastMessage) { }

  ngOnInit() {
    this.createFormInit();
    this.searchFormInit();
    this.getProjects();
    this.getInfraTowers();
    this.getProjectInfraTowers('page=' + this.currentPageIndex);
  }

  createFormInit() {
    this.createForm = this.formBuilder.group({
      id: [''],
      project_id: ['', Validators.required],
      infra_tower_id: ['', Validators.required],
      is_active: [true]
    });
  }

  searchFormInit() {
    this.searchForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.createForm.controls;
  }

  formType(): String {
    return (this.createForm.value.id === '') ? 'Add' : 'Update';
  }

  get sf() {
    return this.searchForm.controls;
  }

  getProjectInfraTowers(params: String) {
    this.projectInfraTowerService.findAll(params)
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.projectInfraTowers = this.serviceResponse.data;
          this.totalRecords = this.serviceResponse.metadata.totalRecords;
          this.itemPerPageIndex = this.serviceResponse.metadata.limit;
        } else {
          this.toastMessage.error(null, this.serviceResponse.statusMessage);
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
            this.createForm.controls['project_id'].setValue(this.projects[0]._id);
          }
        }
      });
  }

  getInfraTowers() {
    this.infraTowerService.findList(null)
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.infraTowers = this.serviceResponse.data;
          if (this.projects.length) {
            this.createForm.controls['infra_tower_id'].setValue(this.infraTowers[0]._id);
          }
        }
      });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.createForm.invalid) {
      return;
    }
    if (this.createForm.value.id !== '') {
      this.projectInfraTowerService.update(this.createForm)
        .subscribe(data => {
          this.responseSuccessHandler(data);
        });
    } else {
      this.projectInfraTowerService.create(this.createForm)
        .subscribe(data => {
          this.responseSuccessHandler(data);
        });
    }
  }

  responseSuccessHandler(data: any) {
    this.serviceResponse = data;
    if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
      this.formSubmitted = false;
      this.createForm.controls['id'].setValue('');
      this.createForm.controls['project_id'].setValue(((this.projects) ? this.projects[0]._id : ''));
      this.createForm.controls['infra_tower_id'].setValue(((this.infraTowers) ? this.infraTowers[0]._id : ''));
      this.createForm.controls['is_active'].setValue(true);
      this.getProjectInfraTowers('page=' + this.currentPageIndex);
      this.toastMessage.success(null, this.serviceResponse.statusMessage);
    } else {
      const errorMessage = (this.serviceResponse.errors) ? this.serviceResponse.errors.statusMessage : this.serviceResponse.statusMessage;
      this.toastMessage.error(null, errorMessage);
    }
  }

  update(projectInfraTower: ProjectInfraTower) {
    this.createForm.controls['id'].setValue(projectInfraTower._id);
    this.createForm.controls['project_id'].setValue(projectInfraTower.project_id);
    this.createForm.controls['infra_tower_id'].setValue(projectInfraTower.infra_tower_id);
    this.createForm.controls['is_active'].setValue(projectInfraTower.is_active);
    this.formTypeShow = this.formType();
    window.scroll(0, 0);
  }

  pageChanged(pageNo: any) {
    this.currentPageIndex = pageNo;
    this.getProjectInfraTowers(this.getSearchedData());
  }

  getSearchedData() {
    const name = (this.searchForm.value.name !== '') ? (this.querParams(this.searchForm.value) + '&') : '';
    return name + 'page=' + this.currentPageIndex;
  }

  querParams(object: Object): String {
    return Object.entries(object).map(([key, val]) => `${key}=${val}`).join('&');
  }

  clearForm() {
    this.formSubmitted = false;
    this.createFormInit();
    this.formTypeShow = this.formType();
  }

  clearSearch() {
    this.searchFormSubmitted = false;
    this.searchFormInit();
    this.currentPageIndex = 1;
    this.getProjectInfraTowers('page=' + this.currentPageIndex);
  }

  onSearch() {
    this.searchFormSubmitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.getProjectInfraTowers(this.getSearchedData());
  }

}
