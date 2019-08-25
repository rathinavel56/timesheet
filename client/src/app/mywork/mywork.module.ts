import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyworkComponent } from './mywork.component';
import { PageHeaderModule } from '../shared';
import { MyworkRoutingModule } from './mywork-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimeSheetService } from '../api/services/time-sheet.service';
import { ToastMessage } from '../utils/toast-message';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserService } from '../api/services/user.service';

@NgModule({
  declarations: [
    MyworkComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    MyworkRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    ToastMessage,
    TimeSheetService,
    UserService
  ]
})
export class MyworkModule { }
