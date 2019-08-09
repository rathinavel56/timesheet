import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './users-routing.module';
import { UserComponent } from './users.component';
import { PageHeaderModule } from '../shared';
import { RoleService } from '../api/services/role.service';
import { UserService } from '../api/services/user.service';
import { ToastMessage } from '../utils/toast-message';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanTransformModule } from '../shared/pipes/boolean-transform.module';
import { ProjectService } from '../api/services/project.service';
import { InfraTowerService } from '../api/services/infra-tower.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    PageHeaderModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BooleanTransformModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    RoleService,
    UserService,
    ToastMessage,
    ProjectService,
    InfraTowerService
  ]
})
export class UserModule { }
