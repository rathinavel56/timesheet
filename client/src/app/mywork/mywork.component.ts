import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ToastMessage } from '../utils/toast-message';
import { AppConst } from '../utils/app-const';
import { TimeSheet } from '../api/models/time-sheet';
import { TimeSheetService } from '../api/services/time-sheet.service';
import { UserService } from '../api/services/user.service';
import { Router } from '@angular/router';
import { User } from '../api/models/user';

@Component({
  selector: 'app-myworks',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss'],
  animations: [routerTransition()]
})
export class MyworkComponent implements OnInit {

  public timeSheetSearchForm: FormGroup;
  public baus: any;
  public otPlanned: any;
  public otUnplanned: any;
  public serviceResponse: any;
  public minDate: any;
  public maxDate: any;
  public timeSheetForm: FormGroup;
  public fillTimeSheets: TimeSheet[] = [];
  public timeSheets: TimeSheet[] = [];
  public startDate: String;
  public endDate: String;
  public itemPerPageIndex: Number;
  public currentPageIndex: Number = 1;
  public totalRecords: Number = 0;
  public currentDate: Date;
  public submitTimeSheet: Boolean = true;
  public timeSheetFormSubmitted: Boolean = false;
  public dailyTimeSheet: Boolean = false;
  public defaultTimeSheet: Boolean = false;
  public headerString: String = 'Enter Your Time Sheet Detail';
  public user: User;
  public managerName: String = 'N/A';
  public projectName: String = 'N/A';
  public infraName: String = 'N/A';

  constructor(public router: Router,
    private formBuilder: FormBuilder,
    private toastMessage: ToastMessage,
    private userService: UserService,
    private timeSheetService: TimeSheetService) {
    const currentDate = new Date();
    this.minDate = { year: currentDate.getFullYear() - 1, month: 12, day: 1 };
    this.maxDate = { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1, day: currentDate.getDate() };
    this.baus = AppConst.BAU;
    this.otPlanned = AppConst.OT_PLANNED;
    this.otUnplanned = AppConst.OT_UNPLANNED;
    this.timeSheetSearchForm = this.formBuilder.group({
      timeSheetDate: [this.maxDate]
    });
    if (this.router.url === '/mywork') {
      this.dailyTimeSheet = true;
      this.currentDate = new Date(this.maxDate.year, (this.maxDate.month - 1), this.maxDate.day);
      this.getUserById();
    } else {
      this.headerString = 'Enter Your Default Time Sheet Detail';
      this.currentDate = new Date(1920, 1, 3);
    }
    this.getStartEnd(this.currentDate);
    this.getTimeSheet('', '');
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.timeSheetForm = this.formBuilder.group({
      timesheets: this.formBuilder.array([])
    });
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  getDefaultTimeSheet() {
    this.defaultTimeSheet = true;
    this.getStartEnd(new Date(1920, 1, 3));
  }

  getTimeSheet(startDate: String, endDate: String) {
    this.timeSheetService.fetchDaily('?start=' + startDate + '&end=' + endDate + '&page=' + this.currentPageIndex)
      .subscribe(data => {
        this.serviceResponse = data;
        if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
          if (startDate === '') {
            this.timeSheets = this.serviceResponse.data;
            this.totalRecords = this.serviceResponse.metadata.totalRecords;
            this.itemPerPageIndex = this.serviceResponse.metadata.limit;
          } else {
            if (this.defaultTimeSheet) {
              if (!this.serviceResponse.data.length) {
                this.toastMessage.error(null, 'You don\'t have default timesheet.');
              } else {
                this.fillTimeSheets = this.serviceResponse.data;
                this.setTimesheets(this.fillTimeSheets);
              }
            } else {
              this.fillTimeSheets = this.serviceResponse.data;
              this.setTimesheets(this.fillTimeSheets);
            }
          }
        }
        this.defaultTimeSheet = false;
      });
  }

  onSearch() {
    this.currentDate = new Date(this.timeSheetSearchForm.value.timeSheetDate.year,
      (this.timeSheetSearchForm.value.timeSheetDate.month - 1), this.timeSheetSearchForm.value.timeSheetDate.day);
    this.getStartEnd(this.currentDate);
  }

  onSubmit() {
    this.timeSheetFormSubmitted = true;
    setTimeout(() => {
      if (document.getElementsByClassName('invalid-feedback-show').length > 0) {
        window.scroll(0, 0);
        return;
      }
      const timeSheetFormFormatted = [];
      this.timeSheetForm.value.timesheets.forEach(x => {
        timeSheetFormFormatted.push({
          start: this.startDate,
          end: this.endDate,
          days: x.days
        });
      });
      this.submitTimeSheet = false;
      this.timeSheetService.daily(timeSheetFormFormatted)
        .subscribe(data => {
          this.serviceResponse = data;
          if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
            this.toastMessage.success(null, this.serviceResponse.statusMessage);
            if (this.dailyTimeSheet) {
              this.getTimeSheet('', '');
            }
          } else {
            this.toastMessage.error(null, this.serviceResponse.statusMessage);
          }
          this.submitTimeSheet = true;
          this.timeSheetFormSubmitted = false;
        });
    }, 100);
  }

  getBauHours(bau: Number) {
    const findElement = AppConst.BAU.find(x => x.id.toString() === bau.toString());
    return findElement.value;
  }

  getBau(bau: Number) {
    const findElement = AppConst.BAU.find(x => x.id.toString() === bau.toString());
    return findElement.name;
  }

  pageChanged(pageNo: Number) {
    this.currentPageIndex = pageNo;
    this.getTimeSheet('', '');
  }

  setTimesheets(timeSheetData: TimeSheet[]) {
    const currentDate = this.currentDate;
    const weekday = AppConst.WEEK_DAYS;
    const monthNames = AppConst.MONTH_NAMES;
    const setWeek = new FormArray([]);

    currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 1));

    for (let i = 0; i < 7; i++) {
      const day = ((currentDate.getDate() < 10) ? '0' + currentDate.getDate() : currentDate.getDate());
      const month = (currentDate.getMonth() + 1);
      const formattedDated = currentDate.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
      if (i === 0) {
        this.startDate = formattedDated;
      }
      if (i === 6) {
        this.endDate = formattedDated;
      }
      let timeSheetFilled = [];
      if (timeSheetData.length > 0) {
        if (!this.defaultTimeSheet) {
          timeSheetFilled = timeSheetData.filter(function (element) {
            return ((formattedDated + 'T00:00:00.000Z') === element.date);
          });
        }
      }
      const dayName = (this.dailyTimeSheet) ? day + ' ' + monthNames[month] + ' ' +
        currentDate.getFullYear() + ' (' + weekday[currentDate.getDay()] + ')' : ' (' + weekday[currentDate.getDay()] + ')';
      if (!this.defaultTimeSheet && timeSheetFilled.length > 0) {
        setWeek.push(this.formBuilder.group({
          id: formattedDated,
          name: dayName,
          bau: timeSheetFilled[0].bau,
          ot_planned: timeSheetFilled[0].ot_planned,
          addtion_hours_planned: (timeSheetFilled[0].addtion_hours_planned !== null) ? timeSheetFilled[0].addtion_hours_planned : '',
          addtion_hours_desc_planned: (timeSheetFilled[0].addtion_hours_desc_planned !== null) ?
            timeSheetFilled[0].addtion_hours_desc_planned : '',
          ot_unplanned: timeSheetFilled[0].ot_unplanned,
          addtion_hours_unplanned: (timeSheetFilled[0].addtion_hours_unplanned !== null) ? timeSheetFilled[0].addtion_hours_unplanned : '',
          addtion_hours_desc_unplanned: (timeSheetFilled[0].addtion_hours_desc_unplanned !== null) ?
            timeSheetFilled[0].addtion_hours_desc_unplanned : ''
        }));
      } else if (this.defaultTimeSheet) {
        setWeek.push(this.formBuilder.group({
          id: formattedDated,
          name: dayName,
          bau: timeSheetData[i].bau,
          ot_planned: timeSheetData[i].ot_planned,
          addtion_hours_planned: (timeSheetData[i].addtion_hours_planned !== null) ? timeSheetData[i].addtion_hours_planned : '',
          addtion_hours_desc_planned: (timeSheetData[i].addtion_hours_desc_planned !== null) ?
          timeSheetData[i].addtion_hours_desc_planned : '',
          ot_unplanned: timeSheetData[i].ot_unplanned,
          addtion_hours_unplanned: (timeSheetData[i].addtion_hours_unplanned !== null) ? timeSheetData[i].addtion_hours_unplanned : '',
          addtion_hours_desc_unplanned: (timeSheetData[i].addtion_hours_desc_unplanned !== null) ?
          timeSheetData[i].addtion_hours_desc_unplanned : ''
        }));
      } else {
        setWeek.push(this.formBuilder.group({
          id: formattedDated,
          name: dayName,
          bau: 0,
          ot_planned: 0,
          addtion_hours_planned: '',
          addtion_hours_desc_planned: '',
          ot_unplanned: 0,
          addtion_hours_unplanned: '',
          addtion_hours_desc_unplanned: ''
        }));
      }
      currentDate.setDate(currentDate.getDate() + 1);
      if (currentDate > new Date()) {
      	break;
      }
    }
    this.initForm();
    const control = <FormArray>this.timeSheetForm.controls.timesheets;
    const timeSheetCreate = {
      days: setWeek
    };
    control.push(this.formBuilder.group(timeSheetCreate));
    return setWeek;
  }

  getStartEnd(currentDate: Date) {
    
    if (currentDate.getDay() !== 6) {
    	currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 1));
    }
    for (let i = 0; i < 7; i++) {
      const day = ((currentDate.getDate() < 10) ? '0' + currentDate.getDate() : currentDate.getDate());
      const month = (currentDate.getMonth() + 1);
      const formattedDated = currentDate.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
      if (i === 0) {
        this.startDate = formattedDated;
      }
      if (i === 6) {
        this.endDate = formattedDated;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    this.getTimeSheet(this.startDate, this.endDate);
  }
  
	onKeydown(event: any) {
	  if (event.key === "Enter") {
		  this.onSubmit();
	  }
	}

  getUserById() {
    this.userService.findById()
      .subscribe(data => {
        this.serviceResponse = data;
        this.user = this.serviceResponse.data;
        this.managerName = this.user.manager[0].name;
        this.projectName = this.user.project[0].name;
        this.infraName = (this.user.infra.length > 0) ? this.user.infra[0].name: 'N/A';
      });
  }

  dateFormat(date: String) {
	  return date.split('T')[0];
	}
  
}
