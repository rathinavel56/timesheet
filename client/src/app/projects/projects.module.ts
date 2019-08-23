import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { PageHeaderModule } from '../shared';
import { ToastMessage } from '../utils/toast-message';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectService } from '../api/services/project.service';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    ToastMessage,
    ProjectService
  ]
})
export class ProjectsModule { }
