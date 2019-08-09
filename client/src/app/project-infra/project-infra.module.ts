import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../shared';
import { ProjectService } from '../api/services/project.service';
import { ProjectInfraTowerService } from '../api/services/project-infra-tower.service';
import { InfraTowerService } from '../api/services/infra-tower.service';
import { ToastMessage } from '../utils/toast-message';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProjectInfraRoutingModule } from './project-infra-routing.module';
import { ProjectInfraComponent } from './project-infra.component';

@NgModule({
  declarations: [ProjectInfraComponent],
  imports: [
    CommonModule,
    ProjectInfraRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    ProjectService,
    InfraTowerService,
    ProjectInfraTowerService,
    ToastMessage
  ]
})
export class ProjectInfraModule { }
