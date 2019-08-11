import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { PageHeaderModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../api/services/user.service';
import { ToastMessage } from '../utils/toast-message';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ChangePasswordRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    ToastMessage
  ]
})
export class ChangePasswordModule { }
