import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { SecurityQuestionList } from '../models/security-question-list';

@Injectable()
export class SecurityQuestionService {

  constructor(private apiService: ApiService) { }

  getSecurityQuestion(): Observable<SecurityQuestionList> {
    const securityQuestion: string = AppConst.STORE_API_PATHS.SECURITYQUESTION;
    return this.apiService.httpGet(securityQuestion);
  }
}
