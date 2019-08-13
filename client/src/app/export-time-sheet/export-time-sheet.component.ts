import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeSheetService } from '../api/services/time-sheet.service';
import { ToastMessage } from '../utils/toast-message';

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
      this.timeSheetService.exportRecord(this.exportForm)
          .subscribe(response => {
              this.serviceResponse = response;
              console.log('response', this.serviceResponse);
          });
    }, 100);
}

}
