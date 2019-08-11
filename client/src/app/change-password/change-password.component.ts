import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../api/services/user.service';
import { AppConst } from '../utils/app-const';
import { ToastMessage } from '../utils/toast-message';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [routerTransition()]
})
export class ChangePasswordComponent implements OnInit {

  public updateForm: FormGroup;
  public submitted: Boolean = false;
  public serviceResponse: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private toastMessage: ToastMessage) { }

  ngOnInit() {
    this.updateFormInit();
  }

  updateFormInit() {
    this.updateForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.pwdMatchValidator });
  }

  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirm_password').value
      ? null : { invalid: true };
  }
  get f() {
    return this.updateForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      if (this.updateForm.invalid && document.getElementsByClassName('invalid-feedback-show').length > 0) {
        return;
      }
      this.userService.changePassword(this.updateForm)
      .subscribe(response => {
          this.serviceResponse = response;
          if (this.serviceResponse.status === AppConst.SERVICE_STATUS.SUCCESS) {
              this.submitted = false;
              this.updateForm.controls['password'].setValue('');
              this.updateForm.controls['confirm_password'].setValue('');
              this.toastMessage.success(null, this.serviceResponse.statusMessage);
          } else {
              this.toastMessage.error(null, this.serviceResponse.statusMessage);
          }
      });
    }, 100);
  }

}
