import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillabilityRoutingModule } from './billability-routing.module';
import { BillabilityComponent } from './billability.component';
import { PageHeaderModule } from '../shared';

@NgModule({
  declarations: [
    BillabilityComponent
  ],
  imports: [
    CommonModule,
    BillabilityRoutingModule,
    PageHeaderModule
  ]
})
export class BillabilityModule { }
