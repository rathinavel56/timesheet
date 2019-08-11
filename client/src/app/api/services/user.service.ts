import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  register(registerForm: FormGroup): Observable<User> {
    const register: string = AppConst.STORE_API_PATHS.REGISTER;
    return this.apiService.httpPost(register, registerForm.value);
  }

  login(loginForm: FormGroup): Observable<User> {
    const login: string = AppConst.STORE_API_PATHS.LOGIN;
    return this.apiService.httpPost(login, loginForm.value);
  }

  findById(): Observable<User> {
    const userById: string = AppConst.STORE_API_PATHS.USERBYID;
    return this.apiService.httpGet(userById);
  }

  findAllManagers(): Observable<User> {
    const managers: string = AppConst.STORE_API_PATHS.MANAGERS;
    return this.apiService.httpGet(managers);
  }

  update(updateForm: FormGroup): Observable<User> {
    const updateDetail: string = AppConst.STORE_API_PATHS.USER;
    return this.apiService.httpPut(updateDetail, updateForm.value);
  }

  changePassword(changePasswordForm: FormGroup): Observable<User> {
    const changePassword: string = AppConst.STORE_API_PATHS.CHANGEPASSWORD;
    return this.apiService.httpPut(changePassword, changePasswordForm.value);
  }

  forgotPassword(forgotForm: FormGroup): Observable<User> {
    const forgotPassword: string = AppConst.STORE_API_PATHS.FORGETPASSWORD;
    return this.apiService.httpPost(forgotPassword, forgotForm.value);
  }
}
