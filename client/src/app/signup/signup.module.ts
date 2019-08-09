import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastMessage } from '../utils/toast-message';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SecurityQuestionService } from '../api/services/security-question.service';
import { ProjectService } from '../api/services/project.service';
import { InfraTowerService } from '../api/services/infra-tower.service';
import { UserService } from '../api/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SecurityQuestionService,
    ProjectService,
    InfraTowerService,
    UserService,
    ToastMessage
  ],
  declarations: [
    SignupComponent
  ]
})
export class SignupModule { }
