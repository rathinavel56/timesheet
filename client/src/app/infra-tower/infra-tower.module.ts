import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfraTowerComponent } from './infra-tower.component';
import { PageHeaderModule } from '../shared';
import { InfraTowerRoutingModule } from './infra-tower-routing.module';
import { InfraTowerService } from '../api/services/infra-tower.service';
import { ToastMessage } from '../utils/toast-message';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    InfraTowerComponent
  ],
  imports: [
    CommonModule,
    PageHeaderModule,
    InfraTowerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    InfraTowerService,
    ToastMessage
  ]
})
export class InfraTowerModule { }
