import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessage } from '../utils/toast-message';
import { SecurityQuestionService } from '../api/services/security-question.service';
import { UserService } from '../api/services/user.service';
import { SecurityQuestionList } from '../api/models/security-question-list';
import { User } from '../api/models/user';
import { AppConst } from '../utils/app-const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [routerTransition()]
})
export class ForgotPasswordComponent implements OnInit {
  public forgotForm: FormGroup;
  public submitted: Boolean;
  public isChange: Boolean;
  public serviceResponse: any;
  public securityQuestions: SecurityQuestionList = new SecurityQuestionList();
  public user: User = new User();

  constructor(private router: Router, private formBuilder: FormBuilder,
      private securityQuestionService: SecurityQuestionService,
      private userService: UserService,
      private toastMessage: ToastMessage) { }

  ngOnInit() {
      this.getSecurityQuestion();
      this.forgotForm = this.formBuilder.group({
          employee_id: [''],
          security_question_id: [''],
          security_question_answer: [''],
          token: [''],
          password: [''],
          confirm_password: ['']
      });
  }

  get f() {
      return this.forgotForm.controls;
  }

  getSecurityQuestion() {
      this.securityQuestionService.getSecurityQuestion()
          .subscribe(data => {
              this.serviceResponse = data;
              if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                  this.securityQuestions = data;
              }
          });
  }
  
  onSubmit() {
      this.cleanForm();
      this.submitted = true;
      setTimeout(() => {
        if (document.getElementsByClassName('invalid-feedback-show').length > 0) {
          return;
        }
        this.userService.forgotPassword(this.forgotForm)
            .subscribe(response => {
                this.serviceResponse = response;
                if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
                    this.submitted = false;
                    this.user = this.serviceResponse.data;
                    this.toastMessage.success(null, this.serviceResponse.statusMessage);
                    if (this.serviceResponse.token) {
                      this.isChange = true;
                      this.forgotForm.controls['token'].setValue(this.serviceResponse.token);
                    } else {
                      this.router.navigate(['/login']);
                    }
                } else {
                    this.toastMessage.error(null, this.serviceResponse.statusMessage);
                }
            });
      }, 100);
  }

  public cleanForm() {
      /* Object.keys(this.forgotForm.controls).forEach((key) =>
        console.log((this.forgotForm.get(key).value !== null) ?
        this.forgotForm.get(key).value.trim() : this.forgotForm.get(key).value));*/
      // Object.keys(formGroup.controls).forEach((key) => formGroup.get(key).setValue(formGroup.get(key).value.trim()));
      // Object.keys(this.f).forEach((key) => (key !== 'security_question_id') ? this.f[key].setValue(this.forgotForm.value.key) : '');
      // Object.keys(this.f).forEach((key) => console.log(this.forgotForm.get(key).value));
  }

}
