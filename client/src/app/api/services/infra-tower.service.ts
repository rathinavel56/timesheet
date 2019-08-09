import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { InfraTower } from '../models/infra-tower';

@Injectable()
export class InfraTowerService {

  constructor(private apiService: ApiService) { }

  create(createForm: FormGroup): Observable<InfraTower> {
    const create: string = AppConst.STORE_API_PATHS.INFRATOWER;
    return this.apiService.httpPost(create, createForm.value);
  }

  update(updateForm: FormGroup): Observable<InfraTower> {
    const update: string = AppConst.STORE_API_PATHS.INFRATOWER;
    return this.apiService.httpPut(update, updateForm.value);
  }

  findAll(params: String): Observable<InfraTower> {
    const findAll: string = (params !== null) ? AppConst.STORE_API_PATHS.INFRATOWER + '?' + params : AppConst.STORE_API_PATHS.INFRATOWER;
    return this.apiService.httpGet(findAll);
  }

  findList(params: String): Observable<InfraTower> {
    const findList: string = (params !== null) ? AppConst.STORE_API_PATHS.INFRATOWERLIST
     + '?' + params : AppConst.STORE_API_PATHS.INFRATOWERLIST;
    return this.apiService.httpGet(findList);
  }
}
