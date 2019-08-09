import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { Project } from '../models/project';

@Injectable()
export class ProjectService {

  constructor(private apiService: ApiService) { }

  create(createForm: FormGroup): Observable<Project> {
    const create: string = AppConst.STORE_API_PATHS.PROJECT;
    return this.apiService.httpPost(create, createForm.value);
  }

  update(updateForm: FormGroup): Observable<Project> {
    const update: string = AppConst.STORE_API_PATHS.PROJECT;
    return this.apiService.httpPut(update, updateForm.value);
  }

  findAll(params: String): Observable<Project> {
    const findAll: string = (params !== null) ? AppConst.STORE_API_PATHS.PROJECT + '?' + params : AppConst.STORE_API_PATHS.PROJECT;
    return this.apiService.httpGet(findAll);
  }

  findList(): Observable<Project> {
    const findList: string = AppConst.STORE_API_PATHS.PROJECTLIST;
    return this.apiService.httpGet(findList);
  }
}
