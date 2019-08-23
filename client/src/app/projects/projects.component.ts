import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConst } from '../utils/app-const';
import { Project } from '../api/models/project';
import { ToastMessage } from '../utils/toast-message';
import { ProjectService } from '../api/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [routerTransition()]
})
export class ProjectsComponent implements OnInit {

  public serviceResponse: any;
  public projects: Project[] = [];
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
    private toastMessage: ToastMessage) { }

  ngOnInit() {
    this.createFormInit();
    this.searchFormInit();
    this.getProjects('page=' + this.currentPageIndex);
  }

  createFormInit() {
    this.createForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
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

  getProjects(params: String) {
    this.projectService.findAll(params)
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          this.projects = this.serviceResponse.data;
          this.totalRecords = this.serviceResponse.metadata.totalRecords;
          this.itemPerPageIndex = this.serviceResponse.metadata.limit;
        } else {
          this.toastMessage.error(null, this.serviceResponse.statusMessage);
        }
      });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.createForm.invalid) {
      return;
    }
    if (this.createForm.value.id !== '') {
      this.projectService.update(this.createForm)
        .subscribe(data => {
          this.formHandler(data);
        });
    } else {
      this.projectService.create(this.createForm)
        .subscribe(data => {
          this.formHandler(data);
        });
    }
  }

  formHandler(data: any) {
    this.serviceResponse = data;
    if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
      this.projects = this.serviceResponse.data;
      this.createForm.controls['id'].setValue('');
      this.createForm.controls['name'].setValue('');
      this.createForm.controls['is_active'].setValue(true);
      this.getProjects('page=' + this.currentPageIndex);
      this.toastMessage.success(null, this.serviceResponse.statusMessage);
    } else {
      this.toastMessage.error(null, this.serviceResponse.statusMessage);
    }
    this.formSubmitted = false;
  }

  update(project: Project) {
    this.createForm.controls['id'].setValue(project._id);
    this.createForm.controls['name'].setValue(project.name);
    this.createForm.controls['is_active'].setValue(project.is_active);
    this.formTypeShow = this.formType();
    window.scroll(0, 0);
  }

  pageChanged(pageNo: any) {
    this.currentPageIndex = pageNo;
    this.getProjects(this.getSearchedData());
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
    this.getProjects('page=' + this.currentPageIndex);
  }

  onSearch() {
    this.searchFormSubmitted = true;
    if (this.searchForm.invalid) {
      return;
    }
    this.getProjects(this.getSearchedData());
  }

}
