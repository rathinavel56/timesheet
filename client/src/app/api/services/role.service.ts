import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class RoleService {

  constructor(private apiService: ApiService) { }

  findAll(): Observable<Role> {
    const findAll: string = AppConst.STORE_API_PATHS.ROLE;
    return this.apiService.httpGet(findAll);
  }

  findAllByUser(params: String): Observable<User> {
    const findAllByUser: string = (params !== null) ? AppConst.STORE_API_PATHS.USER + '?' + params : AppConst.STORE_API_PATHS.USER;
    return this.apiService.httpGet(findAllByUser);
  }
}
