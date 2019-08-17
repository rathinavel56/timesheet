import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { AppConst } from '../../utils/app-const';
import { Observable } from 'rxjs';

import { TimeSheet } from '../models/time-sheet';

@Injectable()
export class TimeSheetService {

  constructor(private apiService: ApiService) { }

  default(timeSheetForm: FormGroup): Observable<TimeSheet> {
    const defaultTimeSheet: string = AppConst.STORE_API_PATHS.DEFAULTTIMESHEET;
    return this.apiService.httpPost(defaultTimeSheet, timeSheetForm.value);
  }

  fetchDefault(): Observable<TimeSheet> {
    const defaultTimeSheet: string = AppConst.STORE_API_PATHS.DEFAULTTIMESHEET;
    return this.apiService.httpGet(defaultTimeSheet);
  }

  daily(timeSheetForm: any): Observable<TimeSheet> {
    const dailyTimeSheet: string = AppConst.STORE_API_PATHS.DAILYTIMESHEET;
    return this.apiService.httpPost(dailyTimeSheet, timeSheetForm);
  }

  fetchDaily(date: String): Observable<TimeSheet> {
    const dailyTimeSheet: string = AppConst.STORE_API_PATHS.DAILYTIMESHEET + date;
    return this.apiService.httpGet(dailyTimeSheet);
  }

  exportRecord(timeSheetForm: any): Observable<TimeSheet> {
    const exportTimeSheet: string = AppConst.STORE_API_PATHS.EXPORTTIMESHEET;
    return this.apiService.httpPost(exportTimeSheet, timeSheetForm);
  }
}
