import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportTimeSheetComponent } from './export-time-sheet.component';
import { ExportTimeSheetRoutingModule } from './export-time-sheet-routing.module';
import { PageHeaderModule } from '../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeSheetService } from '../api/services/time-sheet.service';
import { ToastMessage } from '../utils/toast-message';

@NgModule({
  declarations: [
    ExportTimeSheetComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    NgbModule,
    ReactiveFormsModule,
    ExportTimeSheetRoutingModule
  ],
  providers: [
    ToastMessage,
    TimeSheetService
  ]
})
export class ExportTimeSheetModule { }
