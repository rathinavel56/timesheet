import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';

import { SecurityQuestionService } from '../api/services/security-question.service';
import { UserService } from '../api/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastMessage } from '../utils/toast-message';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [
    SecurityQuestionService,
    UserService,
    ToastMessage
  ]
})
export class ForgotPasswordModule { }
