import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportTimeSheetComponent } from './export-time-sheet.component';
import { ExportTimeSheetRoutingModule } from './export-time-sheet-routing.module';
import { PageHeaderModule } from '../shared';

@NgModule({
  declarations: [
    ExportTimeSheetComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    ExportTimeSheetRoutingModule
  ]
})
export class ExportTimeSheetModule { }
