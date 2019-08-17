import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeSheetService } from '../api/services/time-sheet.service';
import { ToastMessage } from '../utils/toast-message';
import { AppConst } from '../utils/app-const';

@Component({
  selector: 'app-export-time-sheet',
  templateUrl: './export-time-sheet.component.html',
  styleUrls: ['./export-time-sheet.component.scss'],
  animations: [ routerTransition() ]
})
export class ExportTimeSheetComponent implements OnInit {

  public exportForm: FormGroup;
  public submitted: Boolean;
  public serviceResponse: any;
  public windowEvent: any = window;

  constructor(private formBuilder: FormBuilder,
    private toastMessage: ToastMessage,
    private timeSheetService: TimeSheetService) { }

  ngOnInit() {
    this.exportForm = this.formBuilder.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      if (document.getElementsByClassName('invalid-feedback-show').length > 0) {
        return;
      }
      let day;
      let month;
      let start = this.exportForm.get('start').value;
      let end = this.exportForm.get('end').value;
      day = ((start.day < 10) ? '0' + start.day : start.day);
      month = start.month;
      const formattedStartDated = start.year + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
      day = ((end.day < 10) ? '0' + end.day : end.day);
      month = end.month;
      const formattedEndDated = end.year + '-' + ((month < 10) ? '0' + month : month) + '-' + day;
      
      const exportDate = {
        start: formattedStartDated,
        end: formattedEndDated
      };
      this.timeSheetService.exportRecord(exportDate)
          .subscribe(response => {
              this.submitted = false;
              this.serviceResponse = response;
              if (this.serviceResponse.status !== undefined && this.serviceResponse.status !== AppConst.SERVICE_STATUS.SUCCESS) {
                this.toastMessage.error(null, this.serviceResponse.statusMessage);
              } else {
                const blob = new Blob([this.serviceResponse], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const url = (this.windowEvent.webkitURL || this.windowEvent.URL).createObjectURL(blob);
                let anchor;
                anchor = document.createElement('a');
                anchor.download = "TimeSheet.xlsx";
                anchor.href = url;
                anchor.dataset.downloadurl = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', anchor.download, anchor.href].join(':');
                anchor.click();
              }
          });
    }, 100);
}

}
