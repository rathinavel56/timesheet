import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { ProjectInfraTower } from '../models/project-infra-tower';

@Injectable()
export class ProjectInfraTowerService {

  constructor(private apiService: ApiService) { }

  create(createForm: FormGroup): Observable<ProjectInfraTower> {
    const create: string = AppConst.STORE_API_PATHS.PROJECT_INFRA_TOWER;
    return this.apiService.httpPost(create, createForm.value);
  }

  update(updateForm: FormGroup): Observable<ProjectInfraTower> {
    const update: string = AppConst.STORE_API_PATHS.PROJECT_INFRA_TOWER;
    return this.apiService.httpPut(update, updateForm.value);
  }

  findAll(params: String): Observable<ProjectInfraTower> {
    const findAll: string = (params !== null) ? AppConst.STORE_API_PATHS.PROJECT_INFRA_TOWER +
     '?' + params : AppConst.STORE_API_PATHS.PROJECT_INFRA_TOWER;
    return this.apiService.httpGet(findAll);
  }

  findList(): Observable<ProjectInfraTower> {
    const findList: string = AppConst.STORE_API_PATHS.PROJECT_INFRA_TOWER_LIST;
    return this.apiService.httpGet(findList);
  }
}
