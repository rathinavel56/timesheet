import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeSheetService } from '../api/services/time-sheet.service';
import { ToastMessage } from '../utils/toast-message';
import { AppConst } from '../utils/app-const';
import { NgbDatepickerNavigateEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-export-time-sheet',
  templateUrl: './export-time-sheet.component.html',
  styleUrls: ['./export-time-sheet.component.scss'],
  animations: [ routerTransition() ]
})
export class ExportTimeSheetComponent {

  public submitted: Boolean;
  public serviceResponse: any;
  public windowEvent: any = window;
  public startMonth: any;
  public startYear: any;
  public monthNames = AppConst.MONTH_NAMES;

  constructor(private formBuilder: FormBuilder,
    private toastMessage: ToastMessage,
    private timeSheetService: TimeSheetService) { }

  dateNavigate($event: NgbDatepickerNavigateEvent) {
    this.startMonth = $event.next.month;
    this.startYear = $event.next.year;
  }

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      if (document.getElementsByClassName('invalid-feedback-show').length > 0) {
        return;
      }
      const firstDay = new Date(this.startYear, this.startMonth, 1);
      const lastDay = new Date(this.startYear, this.startMonth + 1, 0);
      let day = ((firstDay.getDate() < 10) ? '0' + firstDay.getDate() : firstDay.getDate());
      let month = firstDay.getMonth();
	  let monthName = this.monthNames[month];
      let formattedStartDated = firstDay.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
      day = ((lastDay.getDate() < 10) ? '0' + lastDay.getDate() : lastDay.getDate());
      month = lastDay.getMonth();
      let formattedEndDated = lastDay.getFullYear() + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
      const exportDate = {
        start: formattedStartDated,
        end: formattedEndDated,
		month: monthName,
		year: this.startYear
      };
      this.timeSheetService.exportRecord(exportDate)
          .subscribe(response => {
              this.submitted = false;
              this.serviceResponse = response;
              if (this.serviceResponse !== null && this.serviceResponse.status !== undefined && this.serviceResponse.status !== AppConst.SERVICE_STATUS.SUCCESS) {
                this.toastMessage.error(null, this.serviceResponse.statusMessage);
              } else {
                let anchor;
                anchor = document.createElement('a');
                anchor.href = this.windowEvent.location.origin + "/TimeSheet_" + monthName + "_" + this.startYear + ".xlsx";
                anchor.click();
              }
          });
    }, 100);
}

}
